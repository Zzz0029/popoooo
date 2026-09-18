import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';

const prisma = new PrismaClient();

export async function seedDatabase() {
  const hashedPassword = await argon2.hash('admin123');

  // 1. Admin User
  await prisma.user.upsert({
    where: { email: 'riskiper819@gmail.com' },
    update: { password: hashedPassword },
    create: {
      email: 'riskiper819@gmail.com',
      name: 'Riski Permana',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  // 2. Hall of Fame / Recognitions
  const hofs = [
    {
      organization: 'NASA (National Aeronautics and Space Administration)',
      recognitionTitle: 'Official NASA Bug Bounty Recognition',
      vulnerabilityType: 'Web Application Security',
      severity: 'High',
      description: 'Acknowledged by NASA for security vulnerability discovery as part of a 4-student research team from SMKN 1 Liwa.',
      hallOfFameUrl: 'https://bugbounty.nasa.gov',
      featured: true,
    },
    {
      organization: 'BMKG-CSIRT',
      recognitionTitle: 'BMKG CSIRT Vulnerability Disclosure Acknowledgment',
      vulnerabilityType: 'Web Vulnerability',
      severity: 'Medium',
      description: 'Official hall of fame acknowledgment from BMKG CSIRT for responsible vulnerability disclosure.',
      featured: true,
    },
    {
      organization: 'BekasiKota-CSIRT',
      recognitionTitle: 'BekasiKota CSIRT Hall of Fame',
      vulnerabilityType: 'Web Application Security',
      severity: 'Medium',
      description: 'Security acknowledgment for reporting system vulnerabilities in local government web services.',
      featured: true,
    },
    {
      organization: 'Wonosobo CSIRT',
      recognitionTitle: 'Wonosobo CSIRT Security Acknowledgment',
      vulnerabilityType: 'Broken Access Control',
      severity: 'High',
      description: 'Hall of Fame listing for responsible security research and vulnerability reporting.',
      featured: true,
    },
    {
      organization: 'Gunungkidul CSIRT',
      recognitionTitle: 'Gunungkidul CSIRT Security Hall of Fame',
      vulnerabilityType: 'Information Disclosure',
      severity: 'Medium',
      description: 'Official security certificate of appreciation for vulnerability disclosure.',
      featured: true,
    },
    {
      organization: 'BT (British Telecommunications)',
      recognitionTitle: 'BT Hall of Fame',
      vulnerabilityType: 'Web Security',
      severity: 'High',
      description: 'Listed in BT Security Hall of Fame for responsible vulnerability disclosure.',
      featured: true,
    },
    {
      organization: 'CERT-EU',
      recognitionTitle: 'CERT-EU Security Disclosure Acknowledgment',
      vulnerabilityType: 'Infrastructure Security',
      severity: 'High',
      description: 'European Union Computer Emergency Response Team security recognition.',
      featured: true,
    },
  ];

  for (const hof of hofs) {
    const existing = await prisma.hallOfFame.findFirst({
      where: { organization: hof.organization, recognitionTitle: hof.recognitionTitle }
    });
    if (!existing) {
      await prisma.hallOfFame.create({ data: hof });
    }
  }

  // 3. Achievements & CTF
  const achievements = [
    {
      title: '1st Place LKS Provinsi Lampung 2026 — Cyber Security',
      category: 'Competition',
      organization: 'LKS Provinsi Lampung',
      result: 'Champion (1st Gold Medal)',
      location: 'Lampung, Indonesia',
      description: 'Won 1st Place in the Provincial Student Competency Competition (LKS) for Cyber Security track.',
      featured: true,
    },
    {
      title: 'NASA Bug Bounty Research Team',
      category: 'Bug Bounty',
      organization: 'SMKN 1 Liwa / NASA',
      result: 'Acknowledged Research Team',
      description: 'Member of the 4-student security research team from SMKN 1 Liwa recognized by NASA.',
      featured: true,
    },
  ];

  for (const ach of achievements) {
    const existing = await prisma.achievement.findFirst({
      where: { title: ach.title }
    });
    if (!existing) {
      await prisma.achievement.create({ data: ach });
    }
  }

  // 4. Certifications
  const certs = [
    {
      name: 'Certified Cybersecurity Educator / Practitioner (CCEP)',
      issuer: 'Red Team Leaders / Security Accreditation',
      description: 'Demonstrated proficiency in offensive security testing, ethical hacking, and cybersecurity fundamentals.',
      featured: true,
    },
  ];

  for (const cert of certs) {
    const existing = await prisma.certification.findFirst({
      where: { name: cert.name }
    });
    if (!existing) {
      await prisma.certification.create({ data: cert });
    }
  }

  console.log('Seed execution completed. Admin user (riskiper819@gmail.com / admin123) and sample data ready.');
}

if (require.main === module) {
  seedDatabase()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
