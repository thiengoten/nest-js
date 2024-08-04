import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const budget = await prisma.budget.create({
    data: {
      name: 'My Budget',
      amount: 1000,
    },
  });
  console.log(budget);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
