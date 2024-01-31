import { FaCartPlus, FaHome, FaList } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../../../icons/img/logo.png'
import Button from 'src/components/atoms/Button'
const SideBar = () => {
  return (
    <>
    <div className="wrapper w-[300px] h-screen flex flex-col justify-around items-center">
        <div className="  ">
            <img src={Logo} alt="" className='object-cover w-[100px]' />
        </div>
        <div className="links space-y-7">
            <Link className="link flex justify-between items-center gap-8 w-full text-xl">
                <div className="flex gap-3">
                    <FaHome/>
                    <span>Dashboard</span>
                </div>
                
            </Link>

            <Link className="link flex justify-between items-center gap-8 w-full text-xl">
                <div className="flex gap-3">
                    <FaList/>
                    <span>Orders</span>
                </div>
                
                <span className='badge'>4</span>
            </Link>

            <Link className="link flex justify-between items-center gap-8 w-full text-xl">
                <div className="flex gap-3">
                    <FaCartPlus/>
                    <span>Cart</span>
                </div>
                
                <span className='badge'>4</span>
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