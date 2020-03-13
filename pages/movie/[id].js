import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { getMovieByID, getSimilarMovies } from './../../redux/actions/movies'
import { addMovie, removeMovie } from './../../redux/actions/general'
import Grid from './../../components/grid'
import Rating from './../../components/rating'
 
class Movie extends React.Component {

  componentDidMount() {
    this.loadData()
  }

  loadData () {
    const { id } = this.props.router.query
    this.props.getMovieByID(id)
    this.props.getSimilarMovies(id)
  }

  componentWillUnmount() {

  }

  componentDidUpdate (prevProps) {
    const prevId = prevProps.router.query.id
    const { id } = this.props.router.query
    prevId !== id && this.loadData()
  }

  render() {
    const { id } = this.props.router.query
    const { movies } = this.props
    const movie = movies.filter( m => m.id == id)[0] || {}
    const isInMyList = this.props.myList.filter( i => i == id) 

    return (
      <div className='movie'>
        <Link href='/'>
          <a>Retour</a>
        </Link>

        <div className='content'>
          <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>
          <div className='details'>
            <h3>{movie.original_title}</h3>
            <p>Date de sortie: {movie.release_date}</p>
            <p>{movie.overview}</p>
            {isInMyList.length === 0 ?
              <button onClick={() => this.props.addMovie(movie.id)}>Ajouter à ma liste</button> : 
              <button onClick={() => this.props.removeMovie(movie.id)}>Retirer de ma liste</button>
            }
          </div>
        </div>

        <h3>Suggestions de film</h3>
        {this.props.similarMovies.length > 0 && <Grid movies={this.props.similarMovies.slice(0,5)} />}
        {this.props.similarMovies.length === 0 && <p>Pas de suggestion sur ce film</p>}

        <style jsx>{`
          .movie {
            padding-top: 3em;
          }
          .content {
            display: flex;
            margin-top: 2em;
            background-color: rgba(200, 200, 200, 0.2);
          }

          .content img {
            flex: 0 0 343px;
            margin-right: 2em;
          }

        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  similarMovies: state.similarMovies,
  myList: state.general.myList,
  ratings: state.general.ratings
})

const mapDispatchToProps = dispatch => ({
  getSimilarMovies: (movie_id) => dispatch(getSimilarMovies(movie_id)),
  getMovieByID: (movie_id) => dispatch(getMovieByID(movie_id)),
  addMovie: (movie_id) => dispatch(addMovie(movie_id)),
  removeMovie: (movie_id) => dispatch(removeMovie(movie_id))
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Movie))
