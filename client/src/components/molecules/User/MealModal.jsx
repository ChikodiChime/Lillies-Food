import React, { useState } from 'react'
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import Button from 'src/components/atoms/Button';

const MealModal = ({isOpen, onClose, meal}) => {
    const [count, setCount] = useState(1)
    

    if (!isOpen) return null;

    const handleAdd = () => {
        setCount(count + 1)
    
    }
    const handleMinus = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }
    return (
        <>
            <div className="modal-overlay ">
                <div className="h-full w-full absolute z-0" onClick={onClose}></div>
                <div className="modal-content z-30 ">
                    <img className='w-[200px] h-[200px]' src={`src/icons/img/${meal.img}.png`} alt="" />
                    <h2 className='text-2xl font-bold text-red-600'>{meal.name}</h2>
                    <p className='text-center text-sm leading-loose font-light tracking-wide  '>{meal.details}</p>
                    <div className="flex justify-between w-full text-lg text-red-600 font-medium">
                        <p>NGN {meal.price}.00</p>
                        <p>{meal.prepTime}</p>
                        <p>{meal.stock} Plates Avail</p>
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <div className="flex items-center gap-5">
                            <button onClick={handleAdd} className=' bg-red-400 w-12 h-12 flex items-center justify-center'><FaPlus/></button>
                            <span className='text-2xl'>{count}</span>
                            <button onClick={handleMinus}  className=' bg-red-400 w-12 h-12 flex items-center justify-center'><FaMinus/></button>
                        </div>

                        <Button text={'Add to Cart'}/>
                    </div>
                    
                    <button onClick={onClose} className='absolute top-5 left-1/2 text-red-600'><FaTimes size={30}/></button>
                </div>
            </div>
        </>
    )
}

export default MealModal