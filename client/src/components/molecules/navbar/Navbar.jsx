// import { ReactComponent as DPIconLogo } from 'src/icons/svg/logo.svg';
// import { ReactComponent as DPIconLogo } from 'src/components/molecules/navbar/logo.svg';
import Logo from 'src/icons/svg/Logo';

import { Nav, NavLink } from './Style';

const Navbar = () => {
  return (
    <Nav>
        <div className="nav-wrapper space-between">
            <div className="logo-wrapper flex-centre">
                < Logo />
                <span>Lilies</span>
            </div>
            <div className="link-wrapper space-between">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/Login'>Login</NavLink>
                <NavLink to='/Signup'>Signup</NavLink>
            </div>
        </div>
    </Nav>
  )
}

export default Navbar