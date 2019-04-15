// API/TMDBApi.js

//import API_TOKEN from '../Helpers/token'
const API_TOKEN = "80bef6a0b5f84c0f819ff30c22497b68"

export function getFilmsFromApiWithSearchedText(text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' 
    + text + '&page=' + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromApi(id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getFilmByReleaseDateFromApi(page) {
  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + API_TOKEN 
            + '&vote_count.gte=1000&sort_by=release_date.desc&language=fr&page=' + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}