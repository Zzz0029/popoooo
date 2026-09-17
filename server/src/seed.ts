import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash('admin123'); // Default password
  
  await prisma.user.upsert({
    where: { email: 'riskiper819@gmail.com' },
    update: {},
    create: {
      email: 'riskiper819@gmail.com',
      name: 'Riski Permana',
      password: password,
      role: 'ADMIN',
    },
  });

  console.log('Seed completed. Admin user created.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
