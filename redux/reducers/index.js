// Group all reducers to this file
// Simplify the import in other files

import { combineReducers } from 'redux'

import movies from './movies'
import similarMovies from './similarMovies'
import general from './general'

export default (history) => combineReducers({
  movies,
  similarMovies,
  general
})
