import { MoD } from 'src/utilities/MoD';

const Meals = () => {
  return (
    <div className=''>
      <h1>Special Meals of the Day</h1>
      <p className='about'>Check our specials of the day and get discounts on all our Meals
          and swift delivery to whatever location within Enugu.</p>
      <div className="MealsWrapper space-between">
        {MoD.map((MealsData) => (
          MealsData.Meals?.map((meal, mealIndex) => (
            <div className='mealWrapper' key={mealIndex}>
              {/* Assuming 'img' is the name of the image file without extension */}
              <img
                src={`src/icons/img/${meal.img}.png`}  // Use template literals for dynamic import paths
                alt={meal.name}
              />

              <h3>{meal.name}</h3>
              <p>{meal.details}</p>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default Meals;
