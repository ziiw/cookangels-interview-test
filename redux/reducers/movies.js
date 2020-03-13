import { ACTIONS } from '../actions/movies'

export default (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_MOVIES:
    case ACTIONS.GET_MOVIE_BY_ID:
      return action.payload 
    default:
      return state
  }
}
