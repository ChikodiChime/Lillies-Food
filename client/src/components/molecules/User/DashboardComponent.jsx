import React, { useEffect, useState } from 'react';
import MealModal from './MealModal';
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from 'src/store/productSlice';
import StatusCode from 'src/utilities/StatusCode';

const DashboardComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMeals, setSelectedMeals] = useState(null);
 

  const dispatch = useDispatch()
  const {data:allMeals, status} = useSelector(state => state.products)
  useEffect(() => {
     dispatch(getProducts())
  }, []);

  const openModal = (meal) => {
    setSelectedMeals(meal);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMeals(null);
    
  };
  if(status === StatusCode.LOADING){
    return(
      <div className="flex h-full justify-center items-center">
        <span className="loader"></span>
      </div>
    )
  }
  if(status === StatusCode.ERROR){
    return(
      <div className="flex h-full justify-center items-center">
        
      </div>
    )
  }
  if(allMeals.length === 0){
   
       return <p>No meals available.</p>
        
  }

  const cards = allMeals.map((meal, index) => (
    <div className="mealWrapper flex flex-col shadow-lg p-10 gap-6 items-center" key={index}>
      <img className="w-[150px] [h-150px]" src={meal.img} alt="" />
      <h3 className="text-2xl text-red-600 font-bold">{meal.name}</h3>
      <p className="text-lg text-wrap text-center">{meal.summary}</p>
      <p className="flex justify-between w-full items-center">
        <span className="font-bold text-2xl tracking-wider">N{meal.price}</span>
        <button className="text-red-600 text-xl" onClick={() => openModal(meal)}>Add to Cart</button>
      </p>
    </div>
  ))

  return (
    <>
      <div className="grid h-full py-20 sm:pr-10 overflow-y-auto grid-cols-1 min-[850px]:grid-cols-2 gap-20">
        {cards}
        <MealModal isOpen={modalIsOpen} onClose={closeModal} meal={selectedMeals} />
      </div>
    </>
  );
};

export default DashboardComponent;
