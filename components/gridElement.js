import Link from 'next/link';
import Rating from './rating'
import { useSelector, useDispatch } from 'react-redux'
import { addMovie, removeMovie } from './../redux/actions/general'

export default (props) => {
  const dispatch = useDispatch()
  const ratings = useSelector(state => state.general.ratings)
  const myList = useSelector(state => state.general.myList)
  const isInMyList = myList.filter( id => id === props.movie.id) 

  return (
    <div className='gridElement'>
      <Link as={`/movie/${props.movie.id}`} href="/movie/[id]">
        <a>
          <div className='gridElement-visual'>
            {/* Raccourcis sur cet URL, j'aurais pu stocker les configurations API par avance */}
            {
              props.movie.poster_path ? 
                <img src={`https://image.tmdb.org/t/p/w185/${props.movie.poster_path}`}/>
                :
                <img src={`https://via.placeholder.com/185x278`}/>
            }
          </div>
          <p className='gridElement-title'><b>{props.movie.title}</b></p>
          <p className='gridElement-release'>Sortie le: {props.movie.release_date}</p>
        </a>
      </Link>
      {isInMyList.length === 0 ? 
        <button onClick={() => dispatch(addMovie(props.movie.id))}>Ajouter à ma liste</button> : 
        <button onClick={() => dispatch(removeMovie(props.movie.id))}>Retirer de ma liste</button>
      }

      <Rating id={props.movie.id} ratings={ratings}/>

      <style jsx>{`
        .gridElement{
          flex: 0 1 20%;
          text-align: center;
          margin-bottom: 5em;
        }

        .gridElement .gridElement-visual {
          height: 278px;
        }

        .gridElement img {
          height: 100%;
          box-shadow: 0px 0px 10px rgba(100,100,100, 0.5);
        }

        .gridElement a {
          text-decoration: none;
        }

        .gridElement-title {
          color: black;
        }

        .gridElement-release {
          color: grey;
          font-size: 0.7em;
        }
      `}</style>
    </div>
  )
}
