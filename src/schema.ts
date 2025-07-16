import fs from "fs";
import path from "path";
import { gql } from "apollo-server";

const schemaDir = path.join(__dirname, "graphql/schemas");

const typeDefs = gql(
  fs
    .readdirSync(schemaDir)
    .filter((file) => file.endsWith(".graphql"))
    .map((file) => fs.readFileSync(path.join(schemaDir, file), "utf8"))
    .join("\n")
);

export { typeDefs };
