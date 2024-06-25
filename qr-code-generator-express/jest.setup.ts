import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';

const prisma = new PrismaClient();

beforeAll(async () => {
  // Switch to the test database
  const TEST_DATABASE_URL = process.env.TEST_DATABASE_URL;

  // Run migrations on the test database
  execSync(`DATABASE_URL=${TEST_DATABASE_URL} npx prisma migrate dev --name init --skip-seed`, { stdio: 'inherit' });
});

afterAll(async () => {
  await prisma.$disconnect();
});
