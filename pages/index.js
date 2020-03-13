import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'
import Grid from '../components/grid'
import { getMovies } from './../redux/actions/movies'

 
class Index extends React.Component {

  componentDidMount() {
    this.loadMovies()
  }

  loadMovies () {
    // Par défaut c'est la valeur du store
    const options = {
      sortBy: this.props.general.sortBy,
      filters: this.props.general.filters
    }

    this.props.getMovies(options)
  }

  componentDidUpdate(prevProps) {
    // Demande de re-charger la liste des films
    // Uniquement si les filtres ont changés
    if (this.props.general.sortBy !== prevProps.general.sortBy) {
      this.loadMovies()
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Grid movies={this.props.movies} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  general: state.general
})

const mapDispatchToProps = dispatch => ({
  getLatestMovies: () => dispatch(getLatestMovies()),
  getLatestMovie: () => dispatch(getLatestMovie()),
  getMovies: (options) => dispatch(getMovies(options)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Index)
