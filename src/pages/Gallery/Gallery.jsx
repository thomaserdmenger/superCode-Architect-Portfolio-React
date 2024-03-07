import './Gallery.css'
import { darkModeContext } from '../../context/Context'
import { useContext } from 'react'

const Gallery = () => {
  const { darkMode } = useContext(darkModeContext)

  return (
    <div className={darkMode ? 'wrapper--dark' : 'wrapper'}>
      <main className='gallery'>
        <h2>Photo</h2>
        <p
          className={
            darkMode
              ? 'gallery__subheading gallery__subheading--dark'
              : 'gallery__subheading'
          }>
          Gallery
        </p>
        <article className='gallery__grid'>
          <div></div>
          <div>
            <img
              src='/public/images/gallery-1.png'
              alt='Gallery'
            />
          </div>
          <div>
            <img
              src='/public/images/gallery-2.png'
              alt='Gallery'
            />
          </div>
          <div>
            <img
              src='/public/images/gallery-3.png'
              alt='Gallery'
            />
          </div>
          <div>
            <img
              src='/public/images/gallery-4.png'
              alt='Gallery'
            />
          </div>
          <div>
            <img
              src='/public/images/gallery-5.png'
              alt='Gallery'
            />
          </div>
          <div>
            <img
              src='/public/images/gallery-6.png'
              alt='Gallery'
            />
          </div>
          <div>
            <img
              src='/public/images/gallery-7.png'
              alt='Gallery'
            />
          </div>
          <div>
            <img
              src='/public/images/gallery-8.png'
              alt='Gallery'
            />
          </div>
          <div>
            <img
              src='/public/images/gallery-9.png'
              alt='Gallery'
            />
          </div>
        </article>
      </main>
    </div>
  )
}

export default Gallery
