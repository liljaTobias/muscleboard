import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      id: "1",
      name: "Tobias Lilja",
      email: "tobias@lilja.com",
    },
  });
  await prisma.post.create({
    data: {
      title: "First post",
      authorId: "1",
    },
  });
  await prisma.post.create({
    data: {
      title: "Second post",
      authorId: "1",
    },
  });
  await prisma.post.create({
    data: {
      title: "Third post",
      authorId: "1",
    },
  });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
