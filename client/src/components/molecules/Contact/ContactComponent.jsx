import heroBg1 from '../../../icons/img/manfood.jpg'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaEnvelope, FaHome, FaInstagram } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
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
      <div className="text-black p-40 text-lg">
        <div className="text-center flex flex-col w-full items-center gap-10">
            <h1 className='font-extrabold text-[4rem]'>How can I help you?</h1>
            <p className='text-lg w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit fuga reiciendis voluptates? Dolor, non facilis alias eos ad facere.</p>
            <div className=" flex items-center justify-center">
                <div className="col1">
                    <p className='w-3/4 text-left pb-6'>Lillies Food is a registered tradedmark of Nigerian Company LTD.</p>
                    <IconContext.Provider value={{  className: "text-white text-2xl bg-red-600 w-[40px] h-[40px] p-4 rounded-full " }}>
                      <div className="flex flex-col gap-10 font-bold">
                      <div className="flex items-center gap-4 ">
                          <FaHome/>
                          <p>Block F Iji Road</p>
                        </div>
                        <div className="flex items-center gap-4 ">
                          <FaPhone/>
                          <p>+234 802 222 3333</p>
                        </div>
                        <div className="flex items-center gap-4 ">
                          <FaEnvelope/>
                          <p>hello@lilliesfood.com</p>
                        </div>
                        <div className="flex items-center gap-4 ">
                          <FaInstagram/>
                          <p>LilliesFood</p>
                        </div>
                      </div>
                        
                    </IconContext.Provider>;
                    
                </div>
                <div className="">
              <form action="" method="post" className='grid grid-cols-2 gap-4'>
                <div>
                  <label htmlFor="Firstname">Firstname</label><br />
                  <input type="text" name="" className='border w-full h-[40px]' id="Firstname"  />
                </div>
                <div>
                  <label htmlFor="Lastname">Lastname</label><br />
                  <input type="text" name="" className='border w-full h-[40px]' id="Lastname" />
                </div>
                <div>
                  <label htmlFor="Subject">Subject</label><br />
                  <input type="text" name="" className='border w-full h-[40px]' id="Subject" />
                </div>
                <div>
                  <label htmlFor="InquiryType">Inquiry Type</label><br />
                  <input type="text" name="" className='border w-full h-[40px]' id="InquiryType" />
                </div>
                <div>
                  <label htmlFor="">Your Message</label><br />
                  <textarea name="" className='border' id="" cols="30" rows="10"></textarea>
                </div>
              </form>
            </div>
            </div>
            
        </div>
      </div>

      
    </div>
  )
}

export default ContactComponent