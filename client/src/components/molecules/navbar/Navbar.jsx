
import Logo from '../../../icons/img/logo.png';

import { NavLink } from './Style';

const Navbar = () => {
  return (
    
    <nav className='w-full h-[70px] py-[40px] px-20 fixed z-50 bg-black/50 backdrop-blur-lg'>
        <div className="h-full w-full text-sm flex justify-between items-center ">
            <div className=" flex items-center justify-center">
                <img src={Logo} alt="" className='object-cover w-[100px]' />
            </div>
            <div className=" flex justify-center gap-32 text-lg items-center">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
                <NavLink to='/Login'>Login</NavLink>
                <NavLink to='/Signup'>Signup</NavLink>
            </div>

                

        </div>
    </nav>
  )
}

export default Navbar