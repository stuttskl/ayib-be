import { bookResolvers } from "./book";
import { shelfResolvers } from "./shelf";

export const resolvers = {
  Query: {
    ...bookResolvers.Query,
    ...shelfResolvers.Query,
  },
  Mutation: {
    ...bookResolvers.Mutation,
    ...shelfResolvers.Mutation,
  },
};
