import heroBg1 from '../../../icons/img/hero-bg.jpg';
import play from '../../../icons/img/google-play.png';
import app from '../../../icons/img/app-store.png';
import bg1 from '../../../icons/img/chef.png'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  const heroBg ={
    backgroundImage :`url(${heroBg1})`,
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',

  }
 
  return (
    <>
      <div className='w-full bg-black relative ' style= {heroBg}>
      <div className="absolute z-0 inset-0 bg-gradient-to-t from-transparent to-black"></div>

        <div className=' h-full flex items-center justify-center pl-0 sm:justify-start sm:pl-40 ' data-aos = 'fade-right'>
          <div className="w-[60%] xl:w-[50%] text-white text-center sm:text-left">
              <h1 className=' text-[7rem] leading-[70px] font-extrabold'>Order <span className='text-red-600'>food</span> anywhere, anytime</h1>
              <p className=' text-lg font-light'>Browse from our list of specials to place your order and have food 
                  delivered to you in no time. Affordable, tasty and fast... </p>
              <div className='flex gap-6 py-6'>
                <img src={play} alt="" />
                <img src={app} alt="" />
            </div>
          </div>   
        </div>
      </div>
      <div className="w-full py-40 flex flex-col justify-center items-center sm:flex-row" >
        <img className='w-full sm:w-1/2 object-contain' src={bg1} alt="" />
        <div className="text-black leading-loose text-xl px-20 md:pr-40   w-full sm:w-1/2 h-full flex flex-col justify-center " data-aos = 'fade-right'>
          <h1 className='text-red-600 leading-[50px] text-[6rem] font-extrabold'>The Taste ...</h1>
          <p className='text-red-600 font-semibold'>Lilies food is a delicious fusion of spices and ingredients made to intrigue your tastebuds</p>
          <p>No need to leave your comfort zones, we got you covered with our speedy delivery, You can have a plate of Lilies Food sitting on your lap, with the sweet aroma arousing your nostrils and making your tummy rumble.</p>
        </div>
      </div>
    </>
  )
}

export default Hero