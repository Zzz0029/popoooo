import { Router, Request, Response } from 'express';
import { prisma } from '../index';
import { requireAuth } from '../middleware/auth';
import multer from 'multer';
import path from 'path';

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB

router.post('/upload', requireAuth, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const url = `/uploads/${req.file.filename}`;
  res.json({ url });
});

// Generic CRUD factory
const setupCrud = (modelName: any) => {
  const r = Router();
  const model = (prisma as any)[modelName];

  r.get('/', async (req, res) => {
    const isPublic = !req.cookies.token;
    try {
      const items = await model.findMany({
        where: isPublic ? { visibility: 'Published' } : undefined,
        orderBy: { createdAt: 'desc' }
      });
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch items' });
    }
  });

  r.post('/', requireAuth, async (req, res) => {
    try {
      const item = await model.create({ data: req.body });
      res.json(item);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create item' });
    }
  });

  r.put('/:id', requireAuth, async (req, res) => {
    try {
      const item = await model.update({
        where: { id: req.params.id },
        data: req.body
      });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update item' });
    }
  });

  r.delete('/:id', requireAuth, async (req, res) => {
    try {
      await model.delete({ where: { id: req.params.id } });
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete item' });
    }
  });

  return r;
};

router.use('/achievements', setupCrud('achievement'));
router.use('/hall-of-fame', setupCrud('hallOfFame'));
router.use('/bug-hunting', setupCrud('bugHunting'));
router.use('/ctf', setupCrud('cTF'));
router.use('/certifications', setupCrud('certification'));
router.use('/projects', setupCrud('project'));
router.use('/recognitions', setupCrud('recognition'));

export default router;
