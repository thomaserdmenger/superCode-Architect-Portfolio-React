import './Header.css'
import Logo from '../../assets/svg/Logo'
import Dark from '../../assets/svg/Dark'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='wrapper'>
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
          <div>
            <Dark />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
