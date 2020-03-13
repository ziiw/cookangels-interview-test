import GridElement from './gridElement.js'

export default (props) => {
  return (
    <div className='grid'>
      {props.movies.map((movie) => <GridElement movie={movie} key={movie.id}/>)}
      {props.movies.length === 0 && <p>Chargement de la liste des films</p>}

      <style jsx>{`
        .grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          padding-top: 2em;
          background-color: rgba(200, 200, 200, 0.2)
        }
      `}</style>
    </div>
  )
}
