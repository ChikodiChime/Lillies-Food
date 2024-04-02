
import { FaCartPlus, FaHome, FaList } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Logo from '../../../icons/img/logo.png'
import Button from 'src/components/atoms/Button'
import {useSelector} from 'react-redux'
import { UserContext } from '../../../../context/userContext'

const SideBar = () => {
    const quantity = useSelector(state => state.cart)
    const {user, signOut} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

const handleClick = () => {
  setIsOpen(!isOpen)
}
const handleSignOut = (e) => {
    e.preventDefault()
    navigate('/Login')
    signOut()
}
  return (
    <>
    {isOpen && <div className="overlay" onClick={handleClick}></div>}
    
    <div className={`userSideBar ${isOpen && 'active'} w-[300px]  h-screen relative z-10 `}>
        <button onClick={handleClick} className='side-btn absolute top-32  p-5 rounded-tr-2xl rounded-br-2xl'>
            <FaBars size={25}/>
        </button>
        <div className=" sidebar-content w-full  h-full   flex flex-col justify-around items-center">
            <div className="  ">
                <img src={Logo} alt="" className='object-cover w-[100px]' />
            </div>
            
            <div className="links space-y-3 w-full ">
                <Link to='/Dashboard' className="side-link flex justify-between items-center gap-8 w-full text-xl">
                    <div className="flex gap-6 items-center">
                        <FaHome size={20}/>
                        <span>Dashboard</span>
                    </div>
                    
                </Link>

                <Link to='/Orders' className="side-link flex justify-between items-center gap-8 w-full text-xl">
                    <div className="flex gap-6 items-center">
                        <FaList size={20}/>
                        <span>Orders</span>
                    </div>
                    
                    <span className='badge flex items-center text-white justify-center w-8 h-8 bg-red-500'>{quantity.ordersQuantity}</span>
                </Link>

                <Link to='/Cart' className="side-link flex justify-between items-center gap-8 w-full text-xl  ">
                    <div className="flex gap-6 items-center">
                        <FaCartPlus size={20}/>
                        <span>Cart</span>
                    </div>
                    
                    <span className='badge flex items-center text-white justify-center w-8 h-8 bg-green-800'>{quantity.quantity}</span>

                </Link>

            </div>
            <div className="signout">
                {user && <Button text={'Sign Out'} onClick={handleSignOut}/>}
                
            </div>
        </div>
        
    </div>
    </>
  )
}

export default SideBar