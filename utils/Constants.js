const Constants = {
  API:{
    HOST: 'https://api.themoviedb.org/3',
    API_KEY: 'a68c01d7cfd1ff88142d217ee1ad1856',
    SORT_BY: {
      POPULARITY_ASC: 'popularity.asc',
      POPULARITY_DESC: 'popularity.desc',
      RELEASE_DATE_ASC: 'release_date.asc',
      RELEASE_DATE_DESC: 'release_date.desc'
    },
    SORT_BY_WORDING: {
      'popularity.asc': 'Moins populaire',
      'popularity.desc': 'Plus populaire',
      'release_date.asc': 'Premiers films sortis',
      'release_date.desc': 'Derniers films sortis'
    },
    FILTERS: {
      RELEASE_DATE_GTE: 'release_date.gte',
      RELEASE_DATE_LTE: 'release_date.lte',
      YEAR: 'year'
    }
  }
}

export default Constants