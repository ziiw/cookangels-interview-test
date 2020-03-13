import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link';
import Grid from './../components/grid'
import Header from './../components/header'
import { buildQuery } from './../utils/API_TMDb'

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    this.loadData()
  }

  loadData() {
    const { myList } = this.props
    if (myList.length === 0) return

    const endpoints = myList.map( id => `/movie/${id}`)
    const queries = endpoints.map( e => buildQuery(e, {}))
    const calls = queries.map( q => fetch(q).then(data => data.json()))

    Promise.all(calls)
      .then( movies => this.setState({movies}))
      .catch( error => console.log(error))
  }

  componentDidUpdate(prevProps) {
    const prevList = prevProps.myList.length
    const list = this.props.myList.length

    if (list == 0 && prevList > list) {
      this.setState({movies: []})
    } else if (prevProps.myList.length !== this.props.myList.length) {
      this.loadData()
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.myList.length !== this.props.myList.length) {
      return true
    }

    if (nextState.movies.length !== this.state.movies.length) {
      return true
    }

    return false
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className='list'>
        <div className='list-header'>
          <Link href='/'>
            <a title='Retour'>Retour</a>
          </Link>
          <p>Ma liste</p>
        </div>

        <Grid movies={this.state.movies} />

        <style jsx>{`

          .list-header {
            display: flex;
            padding-top: 3em;
            align-items: center;
            justify-content: space-between;
          }

          .list-header p {
            font-size: 1.2em;
            font-weight: bold;
          }

        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  myList: state.general.myList,
  ratings: state.general.ratings
})

const mapDispatchToProps = dispatch => ({
  getListDetails: (ids) => dispatch(getListDetails(ids))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
