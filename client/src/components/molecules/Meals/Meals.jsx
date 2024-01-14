import { MoD } from 'src/utilities/MoD';

const Meals = () => {
  return (
    <div className='w-full bg-black py-[100px] flex flex-col items-center justify-center text-white'>
      <h1 className=' text-[4rem] text-red-600 font-bold'>Special Meals of the Day</h1>
      <p className='text-lg w-1/2 text-center font-light pb-[30px]'>Check our specials of the day and get discounts on all our Meals
          and swift delivery to whatever location within Enugu.</p>
      <div className="text-center space-between px-52">
        {MoD.map((MealsData) => (
          MealsData.Meals?.map((meal, mealIndex) => (
            <div className=' w-[20%] ' key={mealIndex}>
              {/* Assuming 'img' is the name of the image file without extension */}
              <img
                src={`src/icons/img/${meal.img}.png`}  // Use template literals for dynamic import paths
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
