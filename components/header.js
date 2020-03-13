import Link from 'next/link';
import Filters from './filters'

export default () => {
  return (
    <div className='header'>
      <p className='intro'>👋 Bienvenue sur le test pour le poste de Snr. Front-end @CookAngels</p>
      <div className='menu'>
        <Filters />
        <Link href='/list'>
          <a title='Ma liste'>Ma liste</a>
        </Link>
      </div>

      <style jsx>{`
        .intro {
          text-align: center;
          background-color: rgba(0,0,0,0.7);
          margin: 0;
          margin-bottom: 1em;
          padding: 10px 0px;
          color: white;
          font-size: 0.8em;
        }

        .menu {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1em;
          font-size: 0.8em;
        }
      `}</style>
    </div>
  )
}
