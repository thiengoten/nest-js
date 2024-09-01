import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'alex@ruheni.com',
      password: 'password',
    },
  });
  console.log(user);
  const budget = await prisma.budget.create({
    data: {
      name: 'My Budget 22',
      amount: 2000,
      userId: user.id,
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
