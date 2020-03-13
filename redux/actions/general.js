
export const ACTIONS = {
  UPDATE_SORT_BY: 'UPDATE_SORT_BY',
  UPDATE_FILTERS: 'UPDATE_FILTERS',
  ADD_MOVIE: 'ADD_MOVIE',
  REMOVE_MOVIE: 'REMOVE_MOVIE',
  RATE_MOVIE: 'RATE_MOVIE'
}

export const updateSortBy = (sortBy) => {
  return {
    type: ACTIONS.UPDATE_SORT_BY,
    payload: sortBy
  }
}

export const updateFilters = (filters) => {
  return {
    type: ACTIONS.UPDATE_FILTERS,
    payload: filters
  }
}

export const addMovie = (id) => {
  return {
    type: ACTIONS.ADD_MOVIE,
    payload: id
  }
}

export const removeMovie = (id) => {
  return {
    type: ACTIONS.REMOVE_MOVIE,
    payload: id
  }
}

export const rateMovie = (id, rating) => {
  return {
    type: ACTIONS.RATE_MOVIE,
    payload: {id, rating}
  }
}