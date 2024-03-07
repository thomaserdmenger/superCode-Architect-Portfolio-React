import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='wrapper'>
      <main className='home'>
        <section className='home__hero'>
          <div className='home__hero__content-container'>
            <h2>Project</h2>
            <p>Lorum</p>
          </div>
          <div className='home__hero__image-container'>
            <Link
              className='link--more'
              to='/projects'>
              View Project
            </Link>
          </div>
        </section>
        <section className='home__about'>
          <div className='home__about__image-container'>
            <div>
              <img
                src='/images/building-2.png'
                alt='Building'
              />
              <img
                src='/images/building-3.png'
                alt='Building'
              />
            </div>
            <img
              className='home_about__image-3'
              src='/images/building-4.png'
              alt='Building'
            />
          </div>
          <div>
            <h2>About</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Link className='link--more'>Read more</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
