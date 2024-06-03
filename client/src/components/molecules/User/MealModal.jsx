import React, { useContext, useState } from 'react';
import axios from 'axios';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import Button from 'src/components/atoms/Button';
import { UserContext } from '../../../../context/userContext';
import {toast} from 'react-hot-toast'
import {useDispatch, useSelector} from 'react-redux'
import { addItemToCart } from 'src/store/cartSlice';


const MealModal = ({ isOpen, onClose, meal }) => {;

    const dispatch = useDispatch()
    // const product = useSelector(state => state.cart)
    const [count, setCount] = useState(1)
    const [cartItems, setCartItems] = useState({});
    const [ordered, setOrdered] = useState(false)
    const {user} = useContext(UserContext)
    if (!isOpen) return null;
   
    const handleAdd = () => {
       setCount(count + 1)
    };

    const handleMinus = () => {
        if (count > 0) {
           setCount(count - 1)
        }
    };
   


    const addToCartHandler = async () => {
    
        try {
           
            const response = await axios.post('/api/cart/add', {
                userId: user.id,
                mealId: meal._id, 
                // img: meal.img,
                name: meal.name,
                quantity: count || 0,
                summary: meal.summary,
                stock: meal.stock,
                price: meal.price, 
                details: meal.details, 
                prepTime: meal.prepTime, 
       

            });
            if (response.status = 201){
                dispatch(addItemToCart({
                    userId: user.id,
                mealId: meal._id, 
                // img: meal.img,
                name: meal.name,
                quantity: count || 0,
                summary: meal.summary,
                stock: meal.stock,
                price: meal.price, 
                details: meal.details, 
                prepTime: meal.prepTime, 
                }))
            }
            console.log(response.data.items);
            toast.success('Item added to cart');

        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    return (
        <>
            <div className="modal-overlay ">
                <div className="h-full w-full absolute z-0 " onClick={onClose}></div>
                <div className="modal-content z-30 ">
                    <img className='w-[200px] h-[200px]' src={meal.img} alt="" />
                    <h2 className='text-2xl font-bold text-red-600'>{meal.name}</h2>
                    <p className='text-center text-sm leading-loose font-light tracking-wide'>{meal.details}</p>
                    <div className="extra-detail flex gap-10 justify-between w-full text-lg text-red-600 font-medium">
                        <p>NGN {meal.price}.00</p>
                        <p>{meal.prepTime} Mins</p>
                        <p>{meal.stock} Plates Avail</p>
                    </div>
                    <div className="flex justify-between w-full gap-5 items-center  flex-col sm:flex-row">
                        <div className=" flex items-center gap-5">
                            <button onClick={() => handleAdd()} className=' bg-red-400 hover:bg-red-600 w-12 h-12 flex items-center justify-center'><FaPlus /></button>
                            <span className='text-2xl'>{count || 0}</span>
                            <button onClick={() => handleMinus()} className=' bg-red-400 hover:bg-red-600 w-12 h-12 flex items-center justify-center'><FaMinus /></button>
                        </div>

                        <Button text={'Add to Cart'} onClick={addToCartHandler} />
                    </div>

                    <button onClick={onClose} className='absolute top-5 left-5 text-red-600'><FaTimes size={30} /></button>
                </div>
            </div>
        </>
    )
}

export default MealModal;
