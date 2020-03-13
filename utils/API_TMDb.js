import Constants from './Constants'


export function addSorting (query, sorting) {
  return `${query}&sort_by=${sorting}`
}

export function addFilters (query, filters) {
  const filtersString = filters.map( f => `${f.type}=${f.value}`).join('&')
  return `${query}&${filtersString}`
}

export function buildQuery (endpoint, {sortBy = null, filters = null}) {
  let query = `${Constants.API.HOST}${endpoint}?api_key=${Constants.API.API_KEY}`

  if (sortBy) { query = addSorting(query, sortBy)}
  if (filters) { query = addFilters(query, filters)}

  return query
}