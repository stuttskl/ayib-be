import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const shelfResolvers = {
  Query: {
    shelves: () => prisma.shelf.findMany({ include: { books: true } }),
    shelf: (_: any, args: { id: string }) =>
      prisma.shelf.findUnique({
        where: { id: args.id },
        include: { books: true },
      }),
  },
  Mutation: {
    addBookToShelf: async (
      _: any,
      args: { bookId: string; shelfId: string }
    ) => {
      return prisma.shelf.update({
        where: { id: args.shelfId },
        data: {
          books: {
            connect: { id: args.bookId },
          },
        },
        include: {
          books: true,
        },
      });
    },
  },
};
