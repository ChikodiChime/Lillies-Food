import heroBg1 from '../../../icons/img/hero-bg.jpg';
import play from '../../../icons/img/google-play.png';
import app from '../../../icons/img/app-store.png';
import bg1 from '../../../icons/img/bg1.jpg'
const Hero = () => {
  const heroBg ={
    backgroundImage :`url(${heroBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    zIndex: '10000'

  }
  const bg2 = {
    backgroundImage :`url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    zIndex: '10000'
  }
  return (
    <>
    
      <div className='w-full ' style= {heroBg}>
        <div className=' h-full flex items-center pl-40  '>
            <div className="w-[50%] text-white">
                <h1 className=' text-[6rem] font-extrabold'>Order <span className='text-red-600'>food</span> anywhere, anytime</h1>
                <p className=' text-lg font-light'>Browse from our list of specials to place your order and have food 
                    delivered to you in no time. Affordable, tasty and fast... </p>
              <div className='flex gap-6 py-6'>
                <img src={play} alt="" />
                <img src={app} alt="" />
              </div>
              
                
            </div>
            
        </div>
      </div>
      <div className="w-full h-lvh " style={bg2}>

        <div className="text-black leading-loose text-xl pr-40  float-right w-1/2 h-full flex flex-col justify-center">
          <h1 className='text-red-600 leading-[50px] text-[6rem] font-extrabold'>The Taste ...</h1>
          <p className='text-red-600 font-semibold'>Lilies food is a delicious fusion of spices and ingredients made to intrigue your tastebuds</p>
          <p>No need to leave your comfort zones, we got you covered with our speedy delivery, You can have a plate of Lilies Food sitting on your lap, with the sweet aroma arousing your nostrils and making your tummy rumble.</p>
        </div>
      </div>
    </>
  )
}

export default Hero