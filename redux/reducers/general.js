import { ACTIONS } from './../actions/general'

export default (state = {
    sortBy: '', 
    filters: [], 
    myList: [],
    ratings: []
  }, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      }
    case ACTIONS.UPDATE_FILTERS:
      return {
        ...state,
        filters: action.payload
      }
    case ACTIONS.ADD_MOVIE:
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    case ACTIONS.REMOVE_MOVIE:
      return {
        ...state,
        myList: state.myList.filter(id => id !== action.payload)
      }
    case ACTIONS.RATE_MOVIE:
      return {
        ...state,
        ratings: upsertRating(state, action.payload)
      }
    default:
      return state
  }
}

function upsertRating (state, {id, rating}) {
  const { ratings } = state
  const isRated = ratings.findIndex( m => m.id == id)
  
  if (isRated > -1) {
    // Si on l'a déjà on update son rating
    // Ce n'est pas une copie
    // donc on peut l'update directement
    ratings[isRated].rating = rating
  } else {
    // Sinon on crée une nouvelle entrée
    ratings.push({id, rating})
  }

  return ratings
}