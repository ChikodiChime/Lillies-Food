import { MoD } from 'src/utilities/MoD';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Meals = () => { 
   useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className='w-full bg-black py-[100px]  flex flex-col items-center justify-center text-white' >
      <div className="flex flex-col mb-9 items-center justify-center text-center px-20 sm:px-40" data-aos = 'fade-down'>
        <h1 className=' text-[3rem] sm:text-[4rem] text-red-600 font-bold ' >Special Meals of the Day</h1>
        <p className='text-lg text-center font-light pb-[30px]' >Check our specials of the day and get discounts on all our Meals
            and swift delivery to whatever location within Enugu.</p>
      </div>
      
      <div className="text-center flex justify-center items-center flex-col sm:flex-row gap-10 sm:px-52" data-aos = 'fade-up'>
        {MoD.map((MealsData) => (
          MealsData.Meals?.map((meal, mealIndex) => (
            <div className=' w-[55%] sm:w-[45%]  ' key={mealIndex}>
              {/* Assuming 'img' is the name of the image file without extension */}
              <img
                src={meal.img}  // Use template literals for dynamic import paths
                alt={meal.name}
                className=' border-4 border-red-600 p-5 rounded-full '
              />

              <h3 className='text-xl text-red-200'>{meal.name}</h3>
              <p className='text-base font-light'>{meal.details}</p>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default Meals;
