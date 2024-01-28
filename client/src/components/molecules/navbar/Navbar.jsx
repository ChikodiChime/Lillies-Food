import { useState } from 'react';
import Logo from '../../../icons/img/logo.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)

const handleClick = () => {
  setIsOpen(!isOpen)
}

  return (
    
    <nav className='w-full  py-10 px-20   fixed z-50 bg-black/50 backdrop-blur-lg'>
        <div className="h-full w-full  text-sm flex justify-between items-center ">
            <div className=" flex w-1/2 items-center justify-start">
                <img src={Logo} alt="" className='object-cover w-[100px]' />
            </div>
            <button onClick={handleClick} className='menu-btn'>
              <FaBars size={30}/>
            </button>
            
            {isOpen && <div className="overlay" onClick={handleClick}></div>}
            <div className= {`sideBar ${isOpen && 'active'} flex justify-between w-full text-lg items-center`}>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/About'>About</Link>
                <Link className='nav-link' to='/Contact'>Contact</Link>
                <Link className='nav-link' to='/Login'>Login</Link>
                <Link className='nav-link' to='/Signup'>Signup</Link>
            </div>

                

        </div>
    </nav>
  )
}

export default Navbar