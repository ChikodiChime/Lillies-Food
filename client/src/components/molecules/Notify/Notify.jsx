import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Notify = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className="my-[150px] px-[100px] text-black">
        <div className='space-between'>
            <div className="w-1/2" data-aos = 'fade-right'>
                <h1 className="text-[5rem] font-extrabold">Get Notified When We Update!</h1>
                <p className="text-lg font-medium">Get notified when we add new items to our specials menu, 
                    update our price list or have promos!</p>
            </div>
            <div className="NotifyRight w-[40%]">

                <input type="text" placeholder='chikkychime@gmail.com' className="h-[40px] w-[70%] p-3 mr-2 outline-none text-lg border border-red-600 " />
                <input type="button" value="Get Notified" className="h-[40px] bg-red-600 outline-none border-none p-5 text-white text-lg" />
            </div>
        </div>
    </div>
  )
}

export default Notify