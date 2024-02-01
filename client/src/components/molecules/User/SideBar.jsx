
import { FaCartPlus, FaHome, FaList } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../../../icons/img/logo.png'
import Button from 'src/components/atoms/Button'
const SideBar = () => {
  return (
    <>
    <div className="userSideBar w-[300px]  h-screen flex flex-col justify-around items-center">
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