import { ACTIONS } from '../actions/movies'

export default (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_SIMILAR_MOVIES:
      return action.payload
    default:
      return state
  }
}
