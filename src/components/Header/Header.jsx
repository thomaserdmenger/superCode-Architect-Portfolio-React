import './Header.css'
import Logo from '../../assets/svg/Logo'
import Dark from '../../assets/svg/Dark'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='wrapper'>
      <header>
        <Link to='/'>
          <Logo />
        </Link>
        <nav>
          <NavLink to='/'>Main</NavLink>
          <NavLink to='/gallery'>Gallery</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/certifications'>Certifications</NavLink>
          <NavLink to='/contacts'>Contacts</NavLink>
        </nav>
        <div>
          <Dark />
        </div>
      </header>
    </div>
  )
}

export default Header
