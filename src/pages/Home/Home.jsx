import './Home.css'
import { Link } from 'react-router-dom'
import { darkModeContext } from '../../context/Context'
import { useContext } from 'react'

const Home = () => {
  const { darkMode } = useContext(darkModeContext)

  return (
    <div className={darkMode ? 'wrapper--dark' : 'wrapper'}>
      <main className='home'>
        <section className='home__hero'>
          <div className='home__hero__content-container'>
            <h2>Project</h2>
            <p
              className={
                darkMode ? 'home__hero__lorem--dark' : 'home__hero__lorem'
              }>
              Lorum
            </p>
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
        <section className='home__focus'>
          <h2>Main Focus/Mission Statement</h2>
          <article className='home__focus__grid'>
            <div>
              <p>1</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat.
              </p>
            </div>
            <div>
              <p>2</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat, magna mauris porttitor
                tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </article>
        </section>
        <section className='home__projects'>
          <h2>Our Projects</h2>
          <div className='home__projects__image-container'>
            <img
              src='/images/building-5.png'
              alt='Building'
            />
            <img
              src='/images/building-6.png'
              alt='Building'
            />
          </div>
          <div className='home__projects__image-container'>
            <img
              className='home__projects__image-7'
              src='/images/building-7.png'
              alt='Building'
            />
            <img
              className='home__projects__image-8'
              src='/images/building-8.png'
              alt='Building'
            />
            <img
              className='home__projects__image-9'
              src='/images/building-9.png'
              alt='Building'
            />
          </div>
          <Link className={darkMode ? 'link--more' : 'link--more link--dark'}>
            All Projects
          </Link>
        </section>
        <section className='home__contact'>
          <h2>Contact us</h2>
          <div className='home__contact__grid'>
            <form>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
              />
              <input
                type='tel'
                name='tel'
                id='tel'
                placeholder='Phone Number'
              />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
              />
              <input
                type='text'
                name='interest'
                id='interest'
                placeholder='Interested In'
              />
              <textarea
                name='message'
                id='message'
                placeholder='Message'></textarea>
            </form>
            <div className='home__contact__image-container'></div>
          </div>
          <Link className='link--more link--dark'>Send Email</Link>
        </section>
      </main>
    </div>
  )
}

export default Home
