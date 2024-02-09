
import { FaCartPlus, FaHome, FaList } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Logo from '../../../icons/img/logo.png'
import Button from 'src/components/atoms/Button'
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)

const handleClick = () => {
  setIsOpen(!isOpen)
}
  return (
    <>
    {isOpen && <div className="overlay" onClick={handleClick}></div>}
    
    <div className={`userSideBar ${isOpen && 'active'}  w-[300px]  h-screen relative  flex flex-col justify-around items-center`}>
    <button onClick={handleClick} className='side-btn absolute top-32  p-5 rounded-tr-2xl rounded-br-2xl'>
        <FaBars size={25}/>
    </button>
        <div className="  ">
            <img src={Logo} alt="" className='object-cover w-[100px]' />
        </div>
        
        <div className="links space-y-3 w-full ">
            <Link className="side-link flex justify-between items-center gap-8 w-full text-xl">
                <div className="flex gap-6 items-center">
                    <FaHome size={20}/>
                    <span>Dashboard</span>
                </div>
                
            </Link>

            <Link className="side-link flex justify-between items-center gap-8 w-full text-xl">
                <div className="flex gap-6 items-center">
                    <FaList size={20}/>
                    <span>Orders</span>
                </div>
                
                <span className='badge flex items-center justify-center w-8 h-8 bg-red-500'>4</span>
            </Link>

            <Link className="side-link flex justify-between items-center gap-8 w-full text-xl  ">
                <div className="flex gap-6 items-center">
                    <FaCartPlus size={20}/>
                    <span>Cart</span>
                </div>
                
                <span className='badge flex items-center justify-center w-8 h-8 bg-green-800'>4</span>

            </Link>

        </div>
        <div className="signout">
            <Button text={'Sign Out'}/>
                
            
            
        </div>
    </div>
    </>
  )
}

export default SideBar