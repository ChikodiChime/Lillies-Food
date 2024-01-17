import heroBg1 from '../../../icons/img/manfood.jpg'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaHome } from 'react-icons/fa'
import { IconContext } from 'react-icons';

const ContactComponent = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  const heroBg ={
    backgroundImage :`url(${heroBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '300px',
    width: '100%',

  }
  return (
    <div>
      {/* Contact hero */}

      <div className="">
        <div className="relative flex justify-center items-center" style={heroBg}>
         <div className="absolute z-0 inset-0 bg-gradient-to-t from-transparent to-black"></div>
          <h1 className='font-extrabold text-[5rem] text-center z-10'>CONTACT US</h1>
        </div>
      </div>
      <div className="text-black">
        <div className="">
            <h1>How can I help you?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit fuga reiciendis voluptates? Dolor, non facilis alias eos ad facere.</p>
            <div className="">
                <div className="col1">
                    <p>Lillies Food is a registered tradedmark of Nigerian Company LTD.</p>
                    <IconContext.Provider value={{  className: "text-white text-2xl " }}>
                        <div className="">
                            <div className='bg-red-600'>
                                <FaHome/>
                            </div>
                                <p>Block F Iji Road</p>
                            
                        </div>
                    </IconContext.Provider>;
                    
                </div>
            </div>
        </div>
      </div>

      
    </div>
  )
}

export default ContactComponent