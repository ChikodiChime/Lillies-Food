import React from 'react'
import { FaCartArrowDown, FaCartPlus } from 'react-icons/fa'
import Button from 'src/components/atoms/Button'
import { Meals } from 'src/utilities/Meals'

const DashboardComponent = () => {
  return (
    <>
        <div className="grid grid-cols-3 gap-20">
            {Meals.map((meal, index) => (
                <div className="mealWrapper flex flex-col shadow-lg p-10 gap-6 items-center" key={index} >
                    <img className='w-[150px] [h-150px]' src={`src/icons/img/${meal.img}.png`} alt="" />
                    <h3 className='text-2xl text-red-600 font-bold'>{meal.name}</h3>
                    <p className='text-lg text-wrap text-center'>{meal.summary}</p>
                    <p className='flex justify-between w-full items-center'>
                        <span className='font-bold text-2xl tracking-wider'>N{meal.price}</span>
                         <button className='text-red-600  text-xl'>Add to Cart</button>
                        </p>
                    

                </div>
            ))}
        </div>
    </>
  )
}

export default DashboardComponent