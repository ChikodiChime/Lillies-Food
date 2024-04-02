import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromOrder } from 'src/store/cartSlice';

const OrdersComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const handleRemove = mealId => {
    dispatch(removeItemFromOrder({ mealId }));
  };

  const [statuses, setStatuses] = useState({}); // Object to hold status for each item

  useEffect(() => {
    // Set status to 'pending' for each item initially
    const initialStatuses = {};
    cartItems.orders.forEach(item => {
      initialStatuses[item.mealId] = 'pending';
    });
    setStatuses(initialStatuses);

    // Set timeout for each item to change status to 'delivered' after 20 seconds
    cartItems.orders.forEach(item => {
      const timeout = setTimeout(() => {
        setStatuses(prevStatuses => ({
          ...prevStatuses,
          [item.mealId]: 'delivered'
        }));
        localStorage.setItem(`status_${item.mealId}`, 'delivered');
      }, 20000);
      return () => clearTimeout(timeout); // Cleanup function to clear timeouts
    });
  }, [cartItems.orders]); // Run when cartItems.orders change

  // Define a function to determine the color based on the status
  const getStatusColor = status => {
    switch (status) {
      case 'pending':
        return 'orange';
      case 'delivered':
        return 'rgb(22, 101, 52)';
      default:
        return 'black';
    }
  };

  const cards = cartItems.orders.map((item, index) => (
    <div className="mealWrapper w-full h-full shadow-lg p-10" key={index}>
      <div className="orderWrapper flex flex-col sm:flex-row justify-between gap-6 items-center">
        <div className="titleWrapper flex sm:flex-col w-full sm:w-auto justify-between sm:justify-start items-center sm:items-start">
          <h3 className="text-2xl text-red-600 font-bold">{item.name}</h3>
          <div className="flex justify-start items-center">
            <button onClick={() => handleRemove(item.mealId)} className="flex gap-3 items-center text-sm text-red-400">
              <FaTrash /> Remove
            </button>
          </div>
        </div>
        <div className="detailWrapper flex flex-col sm:flex-row justify-between sm:justify-end w-full sm:w-auto gap-8 text-center">
          <div className="flex justify-between sm:justify-end w-full sm:w-auto gap-8 text-center">
            <p className="">
              Qty <br />
              <span className="font-bold text-red-600 text-xl tracking-wider">{item.quantity} </span>
            </p>
            <p className="">
              Unit Price <br /> <span className="font-bold text-red-600 text-xl tracking-wider">N{item.price}</span>
            </p>
          </div>
          <div className="flex justify-between sm:justify-end w-full sm:w-auto gap-8 text-center">
            <p className="">
              Sub total <br />
              <span className="font-bold text-red-600 text-xl tracking-wider">N{item.price * item.quantity} </span>
            </p>
            <p>
              Status <br />
              <span style={{ color: getStatusColor(statuses[item.mealId]) }} className="text-xl tracking-wider">
                {statuses[item.mealId]}
              </span>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  ));

  if (cartItems.ordersQuantity === 0) {
    return (
      <p className="w-full text-center text-xl">
        No Orders Yet <br /> <Link to={'/Dashboard'} className="text-red-600 cursor-pointer underline">Discover some mouth-watering meals</Link>
      </p>
    );
  }

  return (
    <div className="overflow-y-auto h-full">
      <div className="flex flex-col justify-center items-center py-20 sm:pr-10 gap-10">{cards}</div>
    </div>
  );
};

export default OrdersComponent;
