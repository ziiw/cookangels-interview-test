import {useSelector, useDispatch} from 'react-redux'
import { updateSortBy } from './../redux/actions/general'
import Constants from './../utils/Constants'

export default () => {
  const sortBy = useSelector( state => state.general.sortBy)
  const filters = useSelector( state => state.general.filters)
  const dispatch = useDispatch()

  return (
    <div className='filters'>
      <p>Trier par: </p>
      <select 
        value={sortBy}
        onChange={(e) => dispatch(updateSortBy(e.target.value))}>
        {Object.values(Constants.API.SORT_BY).map( s => {
          return <option value={s} key={s}>{Constants.API.SORT_BY_WORDING[s]}</option>
        })}
      </select>

      <style jsx>{`
        .filters {
          display: flex;
          align-items: center;
        }

        .filters select {
          height: 20px;
          margin-left: 20px
        }
      `}</style>
    </div>
  )
}