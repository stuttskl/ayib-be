import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers/index";
import { typeDefs } from "./schema";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
