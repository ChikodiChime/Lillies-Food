import React, { useState } from 'react'
import { FaCartArrowDown, FaCartPlus } from 'react-icons/fa'
import Button from 'src/components/atoms/Button'
import { Meals } from 'src/utilities/Meals'
import MealModal from './MealModal'

const DashboardComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  
const openModal = (meal) => {
  setSelectedMeal(meal);
  setModalIsOpen(true)
}
const closeModal = () => {
  setModalIsOpen(false);
  setSelectedMeal(null);
}

  return (
    <>
        <div className="grid h-full py-20 sm:pr-10 overflow-y-auto grid-cols-1  min-[850px]:grid-cols-2  gap-20">
            {Meals.map((meal, index) => (
                <div className="mealWrapper flex flex-col shadow-lg p-10 gap-6 items-center" key={index} >
                    <img className='w-[150px] [h-150px]' src={`src/icons/img/${meal.img}.png`} alt="" />
                    <h3 className='text-2xl text-red-600 font-bold'>{meal.name}</h3>
                    <p className='text-lg text-wrap text-center'>{meal.summary}</p>
                    <p className='flex justify-between w-full items-center'>
                        <span className='font-bold text-2xl tracking-wider'>N{meal.price}</span>
                         <button className='text-red-600  text-xl' onClick={() => openModal(meal)}>Add to Cart</button>
                        </p>
                    

                </div>
            ))}
            <MealModal isOpen={modalIsOpen} onClose={closeModal} meal={selectedMeal} />
        </div>
    </>
  )
}



export default DashboardComponent