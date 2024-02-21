import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MealModal from './MealModal';


const DashboardComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('/api/meal/meals');
        setSelectedMeals(response.data);
        setIsLoading(false)
        
      } catch (error) {
        console.error('Error fetching meals:', error);
        setIsLoading(false)
      }
    };

    fetchMeals();
  }, []);

  const openModal = (meal) => {
    setSelectedMeals([meal]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMeals(null);
  };

  return (
    <>
    {isLoading ? (
      <div className="flex h-full justify-center items-center ">
        <span className="loader"></span>
      </div>
    ):(
      <div className="grid h-full py-20 sm:pr-10 overflow-y-auto grid-cols-1 min-[850px]:grid-cols-2 gap-20">
        
     
        {selectedMeals.map((meal, index) => (
          <div className="mealWrapper flex flex-col shadow-lg p-10 gap-6 items-center" key={index}>
            <img className="w-[150px] [h-150px]" src={meal.img} alt="" />
            <h3 className="text-2xl text-red-600 font-bold">{meal.name}</h3>
            <p className="text-lg text-wrap text-center">{meal.summary}</p>
            <p className="flex justify-between w-full items-center">
              <span className="font-bold text-2xl tracking-wider">N{meal.price}</span>
              <button className="text-red-600 text-xl" onClick={() => openModal(meal)}>Add to Cart</button>
            </p>
          </div>
        ))}
        <MealModal isOpen={modalIsOpen} onClose={closeModal} meal={selectedMeals} />
      </div>

    )}
     
          </>
  );
};

export default DashboardComponent;
