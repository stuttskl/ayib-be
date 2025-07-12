import { gql } from "apollo-server";

export const typeDefs = gql`
  type Book {
    id: String!
    createdAt: String!
    title: String!
    author: String!
    rating: Int
    completedOn: String
  }

  type Query {
    books: [Book!]!
    book(id: String!): Book
  }

  type Mutation {
    createBook(
      title: String!
      author: String!
      rating: Int
      completedOn: String
    ): Book!
  }
`;
