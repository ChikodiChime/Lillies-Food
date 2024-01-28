import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Button from 'src/components/atoms/Button';

const Notify = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="my-[100px] px-10 md:px-40 text-black">
        <div className='w-full flex items-center justify-between flex-col sm:flex-row'>
            <div className="w-full sm:w-1/2 text-center sm:text-left mb-20" data-aos = 'fade-right'>
                <h1 className="text-[2rem] sm:text-[5rem] leading-tight font-extrabold">Get Notified When We Update!</h1>
                <p className="text-lg  font-medium">Get notified when we add new items to our specials menu, 
                    update our price list or have promos!</p>
            </div>
            <div className="NotifyRight text-center w-full sm:w-[50%]">

                <input type="text" placeholder='chikkychime@gmail.com' className="h-[40px] w-[70%] p-3 mr-2 outline-none text-lg border border-red-600 " />
                <Button text={'Get Notified'} />
            </div>
        </div>
    </div>
  )
}

export default Notify