import SideBar from "../molecules/User/SideBar"
import { useEffect, useState } from "react";
import axios from 'axios'
const DashboardStructure = ({Content, UserName, text}) => {

  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items and set the state
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/api/cart/get-cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const totalItemsInCart = cartItems.reduce((total, cartItem) => {
   
    return total + cartItem.items.length;
  }, 0);
  return (
    <div className="flex w-screen h-screen ">
      
        <div>
            <SideBar totalItemsInCart={totalItemsInCart}/>
            
        </div>
        
        <div className=" p-10 pb-40 content ">
            <div className="pb-20 text-center md:text-left">
                <h1 className="text-4xl ">{UserName}</h1>
                <p className="pt-3 text-lg tracking-wide">{text}</p>
            </div>
            {Content}
        </div>
    </div>
  )
}

export default DashboardStructure