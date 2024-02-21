import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import Button from 'src/components/atoms/Button'

const AddMealForm = () => {
const [data, setData] = useState({
    img: '',
    name: '',
    price: '',
    summary: '',
    details: '',
    prepTime: '',
    stock: '',
})
const [image, setImage] = useState('')

const convertToBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setData({ ...data, img: reader.result }); // Set img field to base64 string
      setImage(reader.result)
   
    };
    reader.onerror = (error) => {
      console.error('Error converting image to base64:', error);
    };
  };

  
const addMeal = async(e) => {
    e.preventDefault();

    try {
        // Send the meal data including the base64 image string to the backend
        const response = await axios.post('/api/meal/add', data);
        if (response.data.error) {
          toast.error(response.data.error);
        } else {
          setData({}); // Clear form data
          toast.success('Meal Added');
        }
      } catch (error) {
        console.error('Error adding meal:', error);
        toast.error('Failed to add meal');
      }
    };




  return (
    <>
    <form action="" className='flex flex-col text-black' onSubmit={addMeal}>
        <label htmlFor="mealImage">Add Image</label>
        <input onChange={convertToBase64} type="file" accept='image/*' name='img' src="" alt="" placeholder='Add Image' />
        {/* {image == "" || image == null? "": <img src={image} alt="" /> } */}
        
        <input value={data.name} onChange={(e) => setData({...data, name:e.target.value})} type="text" placeholder='name' />
        <input value={data.summary} onChange={(e) => setData({...data, summary:e.target.value})} type="text" placeholder='summary' />
        <input value={data.price} onChange={(e) => setData({...data, price:e.target.value})} type="number" placeholder='price' />
        <input value={data.prepTime} onChange={(e) => setData({...data, prepTime:e.target.value})} type="number" placeholder='prepTime' />
        <input value={data.stock} onChange={(e) => setData({...data, stock:e.target.value})} type="number" placeholder='stock' />
        <textarea placeholder='details' name="" id="" cols="30" rows="10" value={data.details} onChange={(e) => setData({...data, details:e.target.value})} ></textarea>
       
        <Button
        text='Add Meal'
        />
    </form>
    </>
  )
}

export default AddMealForm