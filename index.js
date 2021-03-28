const { ApolloServer } = require("apollo-server");

const { typeDefs } = require("./graphql/typeDef");
const { resolvers } = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
