import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {toast} from 'react-hot-toast'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from 'src/components/atoms/Button';

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [grandTotal, setGrandTotal] = useState(null);

  // Fetch cart items
  useEffect(() => {
      const fetchCartItems = async () => {
          try {
              const response = await axios.get('/api/cart/get-cart');
              const data = response.data;
              setCartItems(data);
              setIsLoading(false);
          } catch (error) {
              console.error('Error fetching cart items:', error);
              setError('Error fetching cart items, please try again later');
              setIsLoading(false);
          }
      };
      fetchCartItems();

      
  }, []);
  useEffect(() => {
    calculateGrandTotal()
  }, [cartItems])

  const calculateGrandTotal = () => {
    let total = 0
    cartItems.forEach(cartItem => {
      cartItem.items.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
      });
    });
    setGrandTotal(total.toLocaleString());
  };
  const removeCartItem = async (userId, mealId) => {
    try {
        await axios.delete(`/api/cart/remove/${userId}/${mealId}`);
        setCartItems(prevCartItems => {
            return prevCartItems.map(cartItem => {
                cartItem.items = cartItem.items.filter(item => item._id !== mealId);
                return cartItem; 

            });
        });
       
        toast.success('Item deleted from cart');
    } catch (error) {
        console.error('Error removing cart item', error);
    }
};


// Function to handle remove button click
const handleRemoveItemClick = (userId, mealId) => {
    removeCartItem(userId, mealId);
};

const subTotal = (item) => {
  
  return item.price * item.quantity
}


return (
  <>
  {isLoading ? (
    <div className="flex h-full justify-center items-center">
      <span className="loader"></span>
    </div>
  ) : error ? (
    <div className="flex h-full justify-center items-center">
      <p>{error}</p>
    </div>
  ) : (
    <div className="overflow-y-auto h-full  ">
      {cartItems.map((cartItem) => (
        <div className='flex flex-col  py-20  sm:pr-10  gap-10'  key={cartItem._id}>
          {cartItem.items.length === 0 ? (
            <p className='w-full text-center text-xl'>Cart is Empty <br /> <Link to={'/Dashboard'} className='text-red-600 cursor-pointer underline'>Discover some mouth-watering meals</Link></p>
          ) : (
            cartItem.items.map((item, index) => (
              <div className="mealWrapper w-full h-full shadow-lg p-10" key={index}>
                <div className="flex justify-between gap-6 items-center">
                  <div className="flex w-full items-center gap-5">
                    <div className="flex flex-col gap-6">
                      <h3 className="text-3xl text-red-600 font-bold">{item.name}</h3>
                      <p className="text-sm text-wrap">{item.summary}</p>
                      <span className="text-red-400 text-sm">{item.stock} plates left</span>
                    </div>
                  </div>
                  <div className="flex justify-end flex-col gap-5 items-end">
                    <p className="">Unit Price <br /> <span className="font-bold text-red-400 text-xl tracking-wider">N{item.price}</span></p>
                    <p className="">Sub total <br /><span className="font-bold text-red-600 text-2xl tracking-wider">N{subTotal(item)} </span></p>
                  </div>
                </div>
                <div className="flex justify-end mt-7 items-center">
                  <button onClick={() => handleRemoveItemClick(cartItem.userId, item._id)} className="flex gap-3 items-center text-2xl text-red-400"><FaTrash /> Remove</button>
                </div>
              </div>
            ))
          )}
          <div className="grand-total px-10 sm:px-20 py-10 w-full flex flex-col justify-center items-center  gap-10">
        
            <div className=" font-bold text-2xl sm:text-3xl flex justify-between w-full items-center">
              <h2 className=" text-red-600">Cart Summary:</h2>
              <p className=''>N {grandTotal}.00</p>
            </div>
            <Button text={`Check Out (N ${grandTotal})`} />
          </div>
        </div>
      ))}
      
    </div>
  )}
  
</>

  )
}

export default CartComponent