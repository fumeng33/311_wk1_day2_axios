const axios  = require('axios');

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account

const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=d771b19ef336ed8381def3a60b574464`
  //make a request to the discover endpoint
  // .then is a promise (do this frist than this)
  return axios(url)
    .then(response => response);
}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=d771b19ef336ed8381def3a60b574464`
  // make a requrest for a user with a given ID 

  return axios(url)
    .then(response => response.data)

}

console.log(getMovieById(3))

const getMovieByIdFailure = () => {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=d771b19ef336ed8381def3a60b574464`
  //find the error and get return a 404
  return axios(url)
    .then(response => response.data)
    .catch(function (error) {
      return error.response.status
    })
}


module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}