import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.shelf.deleteMany(); // clear existing data
  await prisma.shelf.createMany({
    data: [
      {
        color: "#F7B32B",
        name: "Want to read",
        createdAt: "2024-09-01T00:00:00.000Z",
      },
      {
        color: "#A9E5BB",
        name: "Currently reading",
        createdAt: "2024-09-01T00:00:00.000Z",
      },
      {
        color: "#E4572E",
        name: "Already read",
        createdAt: "2024-09-01T00:00:00.000Z",
      },
      {
        color: "#2D1E2F",
        name: "Didn't finish reading",
        createdAt: "2024-09-01T00:00:00.000Z",
      },
      {
        color: "#9E829C",
        name: "Overflow",
        createdAt: "2024-09-01T00:00:00.000Z",
      },
    ],
  });

  await prisma.book.createMany({
    data: [
      {
        title: "Atomic Habits",
        author: "James Clear",
        rating: 5,
        completedOn: "2024-10-01T00:00:00.000Z",
        createdAt: "2024-09-01T00:00:00.000Z",
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        rating: 4,
        completedOn: "2024-09-15T00:00:00.000Z",
        createdAt: "2024-08-20T00:00:00.000Z",
      },
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        createdAt: "2024-07-01T00:00:00.000Z",
      },
      {
        title: "The Hidden Girl and Other Stories",
        author: "Ken Liu",
        rating: 3,
        completedOn: "2024-06-20T00:00:00.000Z",
        createdAt: "2024-06-01T00:00:00.000Z",
      },
    ],
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
