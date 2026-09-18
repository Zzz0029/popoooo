import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import rateLimit from 'express-rate-limit';
import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
import { seedDatabase } from './seed';

dotenv.config();

const app = express();
export const prisma = new PrismaClient();

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Rate limiting for auth
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30, // Relaxed for local dev testing
  message: 'Too many login attempts, please try again later.'
});

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
import authRoutes from './routes/auth';
import apiRoutes from './routes/api';

app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  try {
    // Auto seed check for zero-config local development
    await seedDatabase();
  } catch (err) {
    console.warn('Auto-seed warning:', err);
  }

  app.listen(PORT, () => {
    console.log(`[CYSEC-SERVER] Running on http://localhost:${PORT}`);
  });
}

bootstrap();
