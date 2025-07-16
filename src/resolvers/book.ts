import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const bookResolvers = {
  Query: {
    books: () => prisma.book.findMany(),
    book: (_: any, args: { id: string }) =>
      prisma.book.findUnique({ where: { id: args.id } }),
  },
  Mutation: {
    createBook: (
      _: any,
      args: {
        title: string;
        author: string;
        rating?: number;
        completedOn?: string;
      }
    ) =>
      prisma.book.create({
        data: {
          title: args.title,
          author: args.author,
          rating: args.rating,
          completedOn: args.completedOn
            ? new Date(args.completedOn)
            : undefined,
        },
      }),
    addBookToShelf: async (
      _: any,
      args: { bookId: string; shelfId: string }
    ) => {
      return prisma.book.update({
        where: { id: args.bookId },
        data: { shelfId: args.shelfId },
      });
    },
  },
};
