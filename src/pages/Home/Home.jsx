import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='wrapper'>
      <main className='home'>
        <section className='home__hero'>
          <div className='home__hero__content-container'>
            <p>Project</p>
            <p>Lorum</p>
          </div>
          <div className='home__hero__image-container'>
            <Link to='/projects'>View Project</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
