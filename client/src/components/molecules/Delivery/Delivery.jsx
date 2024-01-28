import rider from '../../../icons/img/rider.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Delivery = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    
    <div className=" w-full flex flex-col-reverse sm:flex-row px-10  lg:px-40 py-12 items-center justify-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-500 via-red-600 to-red-500" >
        <div className="left w-full sm:w-1/2 text-center sm:text-left " data-aos = 'fade-right'>
            <h1 className="text-white leading-tight pb-10 font-extrabold text-[2rem] sm:text-[4rem] md:text-[5rem]">We deliver throughout Enugu State</h1>
            <p className="font-light text-justify leading-7 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus officia, quod, assumenda laborum vero perferendis earum voluptatem vitae consequuntur quo quos expedita ad? Ad voluptate doloribus provident cupiditate ipsa.</p>
            <button className="px-8 py-4 mt-6 border border-white font-semibold">Read More</button>
        </div>
        <div className="right w-full sm:w-1/2 flex justify-end " >
            <img src={rider} alt="" className='object-cover w-[80%]' />
        </div>

    </div>
  )
}

export default Delivery