import heroBg1 from '../../../icons/img/manfood.jpg'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaEnvelope, FaHome, FaInstagram } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { IconContext } from 'react-icons';
import Button from 'src/components/atoms/Button';

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
      <div className="text-black p-20 md:p-52 text-lg w-full">
        <div className="text-center flex flex-col w-full items-center gap-10">
            <h1 className='font-extrabold text-[4rem] leading-normal'>How can I help you?</h1>
            <p className='text-lg w-[70%] md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit fuga reiciendis voluptates? Dolor, non facilis alias eos ad facere.</p>
            <div className=" flex w-full gap-7 flex-col-reverse sm:flex-row items-center justify-between">
                <div className="col1">
                    <p className=' w-full  text-center  sm:text-left pb-6'>Lillies Food is a registered tradedmark of Nigerian Company LTD.</p>
                    <IconContext.Provider value={{  className: "text-white text-2xl bg-red-600 w-[40px] h-[40px] p-4 rounded-full " }}>
                      <div className="flex flex-col gap-10 font-bold w-full items-center">
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
            <div className="w-full text-left">
              <form action="" method="post" className='grid grid-cols-2 gap-9 '>
                <div>
                  <label className='font-semibold leading-loose' htmlFor="Firstname">Firstname</label><br />
                  <input type="text" name="" className='border bg-slate-200 opacity-25 w-full h-[40px]' id="Firstname"  />
                </div>
                <div>
                  <label className='font-semibold leading-loose' htmlFor="Lastname">Lastname</label><br />
                  <input type="text" name="" className='border bg-slate-200 opacity-25 w-full h-[40px]' id="Lastname" />
                </div>
                <div>
                  <label className='font-semibold leading-loose' htmlFor="Subject">Subject</label><br />
                  <input type="text" name="" className='border bg-slate-200 opacity-25 w-full h-[40px]' id="Subject" />
                </div>
                <div>
                  <label className='font-semibold leading-loose' htmlFor="InquiryType">Inquiry Type</label><br />
                  <input type="text" name="" className='border bg-slate-200 opacity-25 w-full h-[40px]' id="InquiryType" />
                </div>
                <div className='gridSpan'>
                  <label className='font-semibold leading-loose' htmlFor="">Your Message</label><br />
                  <textarea name="" className='border w-full bg-slate-200 opacity-25'  id="" cols="" rows="10"></textarea>
                </div>
                <div className='w-full'>
                  <Button text={'Send Message'}/>
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