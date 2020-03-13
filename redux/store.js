import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import Constants from './../utils/Constants'

import baseReducers from './reducers/'

const state = { 
  movies: [],
  similarMovies: [],
  general: {
    ratings: [],
    myList: [],
    sortBy: Constants.API.SORT_BY.RELEASE_DATE_DESC,
    filters: [{
      type: Constants.API.FILTERS.RELEASE_DATE_LTE,
      value: Date.now()
    }]
  }
}

export function initializeStore(initialState = state) {
  return createStore(
    baseReducers(),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}