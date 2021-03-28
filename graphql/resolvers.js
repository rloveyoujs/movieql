const { getMovies, getMovie, deleteMovie } = require("./db");

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getMovie(id),
  },
  Mutation: {
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

module.exports = {
  resolvers,
};
