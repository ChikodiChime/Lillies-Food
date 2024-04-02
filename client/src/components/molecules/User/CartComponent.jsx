import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {toast} from 'react-hot-toast'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';
import {useSelector, useDispatch } from 'react-redux'
import { removeItemFromCart } from 'src/store/cartSlice';

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [grandTotal, setGrandTotal] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const cartProducts = useSelector(state => state.cart)
  const dispatch = useDispatch()
// console.log(cartProducts.data)

  const removeCartItem = async (userId, mealId) => {
    try {
        await axios.delete(`/api/cart/remove/${userId}/${mealId}`);
        
    
        toast.success('Item deleted from cart');
    } catch (error) {
        console.error('Error removing cart item', error);
    }
};


// Function to handle remove button click
const handleRemoveItemClick = (userId, mealId) => {
    removeCartItem(userId, mealId);
    dispatch(removeItemFromCart({mealId}))
};


const openModal = () => {
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
  
};
const cards = cartProducts.data.map((item, index) => (
  <div className="mealWrapper w-full h-full shadow-lg p-10" key={index}>
    <div className="flex justify-between gap-6 items-center">
      <div className="flex sm:flex-row flex-col w-full sm:items-center gap-5">
      {/* <img className="w-[150px] [h-150px]" src={item.img} alt="" /> */}

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl text-red-600 font-bold">{item.name}</h3>
          <p className='font-bold text-red-400'>{item.quantity} plate(s)</p>
          <span className=" text-sm">{item.stock} plates left</span>
        </div>
      </div>
      <div className="flex justify-end flex-col gap-5">
        <p className="">Unit Price <br /> <span className="font-bold text-red-400 text-xl tracking-wider">N{item.price}</span></p>
        <p className="">Sub total <br /><span className="font-bold text-red-600 text-3xl tracking-wider">N{item.price * item.quantity} </span></p>
      </div>
    </div>
    <div className="flex justify-end mt-7 items-center">
      <button onClick={() => handleRemoveItemClick(item.userId, item.mealId)} className="flex gap-3 items-center text-2xl text-red-400"><FaTrash /> Remove</button>
    </div>
  </div>
))
if(cartProducts.quantity === 0){
   
  return <p className='w-full text-center text-xl'>Cart is Empty <br /> <Link to={'/Dashboard'} className='text-red-600 cursor-pointer underline'>Discover some mouth-watering meals</Link></p>

   
}

return (
  <>
    <div className="overflow-y-auto h-full  ">
      <div className='flex flex-col justify-center items-center  py-20  sm:pr-10  gap-10' >
        {cards}

        <div className="grand-total bg-red-600 rounded-md px-10 md:px-5 sm:px-20 py-5 w-full md:w-3/4 flex flex-col justify-center items-center  gap-10">
        
            <div className=" font-bold  text-white text-2xl sm:text-3xl flex justify-between w-full items-center">
              <h2 className=" ">Cart Summary:</h2>
              <p className=''>N {cartProducts.total}.00</p>
            </div>
            <button onClick={openModal} className='bg-white rounded-md px-20 py-5 font-bold text-xl text-black hover:bg-white/90' >Check Out (N {cartProducts.total})</button>
          </div> 
      </div>
      <Checkout isOpen={modalIsOpen} onClose={closeModal} cartItems={cartItems}  />

    </div>
          
        
   
    
  
  
</>

  )
}

export default CartComponent