import { useDispatch } from 'react-redux'
import { rateMovie } from './../redux/actions/general'

export default (props) => {
  const dispatch = useDispatch()
  const isRated = props.ratings.find( m => m.id == props.id)

  return (
    <div className='ratings'>
      <p>Score</p>
      <div className='stars'>
        <div onClick={() => dispatch(rateMovie(props.id, 1))}>{isRated && isRated.rating > 0 ? `⭐️` : `.`}</div>
        <div onClick={() => dispatch(rateMovie(props.id, 2))}>{isRated && isRated.rating > 1 ? `⭐️` : `.`}</div>
        <div onClick={() => dispatch(rateMovie(props.id, 3))}>{isRated && isRated.rating > 2 ? `⭐️` : `.`}</div>
        <div onClick={() => dispatch(rateMovie(props.id, 4))}>{isRated && isRated.rating > 3 ? `⭐️` : `.`}</div>
        <div onClick={() => dispatch(rateMovie(props.id, 5))}>{isRated && isRated.rating > 4 ? `⭐️` : `.`}</div>
      </div>

      <style jsx>{`
        .stars {
          display: flex;
          justify-content: center;
        }

        .stars div {
          margin-right: 5px;
        }

        .stars div:hover {
          cursor: pointer;
        }

      `}</style>
    </div>
  )
}
