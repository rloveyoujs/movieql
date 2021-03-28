const { ApolloServer } = require("apollo-server");

const { typeDefs } = require("./graphql/typeDef");
const { resolvers } = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
