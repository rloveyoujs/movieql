const axios = require("axios");

const API_URL = "https://yts.mx/api/v2/list_movies.json";

let movies = null;

(async function () {
  movies = (await axios.get(`${API_URL}`)).data.data.movies;
})();

function getMovies() {
  return movies;
}

function getMovie(id) {
  return movies.filter((movie) => movie.id === id)[0];
}

function deleteMovie(id) {
  const newMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > newMovies.length) {
    movies = newMovies;
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getMovies,
  getMovie,
  deleteMovie,
};
