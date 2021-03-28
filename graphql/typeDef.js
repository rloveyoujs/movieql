const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    year: Int!
    rating: Float!
    summary: String!
    medium_cover_image: String!
  }

  type Query {
    movies: [Movie]!
    movie(id: Int!): Movie
  }

  type Mutation {
    deleteMovie(id: Int!): Boolean!
  }
`;

module.exports = {
  typeDefs,
};
