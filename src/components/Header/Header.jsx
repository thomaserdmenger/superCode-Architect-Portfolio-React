import './Header.css'
import Logo from '../../assets/svg/Logo'
import Dark from '../../assets/svg/Dark'
import Light from '../../assets/svg/Light'
import { Link, NavLink } from 'react-router-dom'
import { darkModeContext } from '../../context/Context'
import { useContext } from 'react'

const Header = () => {
  const { setDarkMode, darkMode } = useContext(darkModeContext)

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode)
  }

  return (
    <div className={`wrapper ${darkMode ? 'darkMode--header' : ''}`}>
      <header className='header'>
        <Link
          className='header__logo'
          to='/'>
          <Logo />
        </Link>
        <div className='header__right-container'>
          <nav>
            <NavLink
              className='link'
              to='/'>
              Main
            </NavLink>
            <NavLink
              className='link'
              to='/gallery'>
              Gallery
            </NavLink>
            <NavLink
              className='link'
              to='/projects'>
              Projects
            </NavLink>
            <NavLink
              className='link'
              to='/certifications'>
              Certifications
            </NavLink>
            <NavLink
              className='link'
              to='/contacts'>
              Contacts
            </NavLink>
          </nav>
          <div
            className='darkModeIcon--dark'
            onClick={toggleDarkMode}>
            <Dark />
          </div>
          <div
            className='darkModeIcon--light'
            onClick={toggleDarkMode}>
            <Light />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
