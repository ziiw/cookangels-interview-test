import fetch from 'node-fetch'
import { buildQuery } from './../../utils/API_TMDb'

export const ACTIONS = {
  GET_MOVIE_BY_ID: 'GET_MOVIE_BY_ID',
  GET_MOVIES: 'GET_MOVIES',
  GET_SIMILAR_MOVIES: 'GET_SIMILAR_MOVIES',
}

export const getMovies = (options) => {
  const endpoint = '/discover/movie'
  const query = buildQuery(endpoint, options) 

  return dispatch => {
    fetch(query)
      .then(data => data.json())
      .then(({results}) => {
        dispatch({
          type: ACTIONS.GET_MOVIES,
          payload: results
        })
      })
      .catch(error => console.log(error))
  }
}

export const getMovieByID = (movie_id) => {
  const endpoint = `/movie/${movie_id}`
  const query = buildQuery(endpoint, {})

  return dispatch => {
    fetch(query)
      .then(data => data.json())
      .then((movie) => {
        dispatch({
          type: ACTIONS.GET_MOVIE_BY_ID,
          payload: [movie]
        })
      })
      .catch(error => console.log(error))
  }
}

export const getSimilarMovies = (movie_id) => {
  const endpoint = `/movie/${movie_id}/similar`
  const query = buildQuery(endpoint, {})

  return dispatch => {
    fetch(query)
      .then(data => data.json())
      .then(({results}) => {
        dispatch({
          type: ACTIONS.GET_SIMILAR_MOVIES,
          payload: results
        })
      })
      .catch(error => console.log(error))
  }
}