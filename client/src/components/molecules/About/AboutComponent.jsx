import heroBg1 from '../../../icons/img/manfood.jpg'
import chef from '../../../icons/img/chef.png'

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'


const AboutComponent = () => {
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
      {/* ABout hero */}

      <div className="">
        <div className="relative flex justify-center items-center" style={heroBg}>
         <div className="absolute z-0 inset-0 bg-gradient-to-t from-transparent to-black"></div>
          <h1 className='font-extrabold text-[5rem] text-center z-10'>ABOUT US</h1>
        </div>
      </div>

      {/* about chef */}
      <div className="">
        <div className="w-full py-40 px-20 md:px-40 flex justify-center items-center flex-col">
          <h1 className="text-red-600 text-center text-[4rem] font-extrabold" data-aos = 'fade-down'>Meet the Chef Behind Delicious Lilies Food</h1>
          <div className="flex flex-col sm:flex-row gap-20 text-black text-lg leading-relaxed tracking-wider">
            <p data-aos = 'fade-right'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime debitis animi ipsam autem unde,
               alias exercitationem ullam dolore facilis nobis. Laboriosam inventore odit, esse asperiores eius,
                consequatur pariatur maxime maiores sed ut porro dolorem voluptates praesentium doloribus nobis neque
                 quis mollitia omnis rerum aspernatur iusto. <br /> <br /> Sint dolores eveniet sapiente neque deserunt, 
                 exercitationem repellat autem magnam quasi  perferendis facere numquam
                  pariatur eius. Optio iste, sunt error laudantium ullam aperiam officia perferendis dolore, asperiores 
              officiis magni amet tempore voluptatum ratione sed eveniet non facere et maiores corporis.
            </p>
            <p data-aos = 'fade-left'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime debitis animi ipsam autem unde,
               alias exerci voluptates praesentium doloribus nobis neque
                 quis mollitia omnis rerum aspernatur iusto. Sint dolores eveniet sapiente neque deserunt, 
                 exercitationem repellat autem magnam quasi <br /> <br /> commodi delectus magni expedita, aperiam non 
                 consequatur rerum voluptatibus explicabo eaque impedit reiciendis ab. Earum perferendis facere numquam
                  pariatur eius. Optio iste, sunt error laudantium ullam aperiam officia perferendis dolore, asperiores 
              officiis magni amet tempore voluptatum ratione sed eveniet non facere et maiores corporis.
            </p>
          </div>
        </div>
      </div>

      {/* inspire */}
      <div className="bg-red-600">
        <div className="flex items-center justify-center flex-col-reverse md:flex-row">
          <div className="px-20 md:pl-40 py-40 ">
            <h1 className='font-extrabold text-[4rem] text-center' data-aos = 'fade-down'> We aim to inspire</h1>
            <p className='text-lg' data-aos = 'fade-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo soluta tempora, excepturi
               unde molestias optio asperiores eos deserunt tempore eaque <br /> <br /> eius maxime quos beatae iure voluptatem
                sed quod dignissimos quis dolores! Neque id possimus sed incidunt iure, facilis omnis distinctio
                 rem atque ea, doloremque obcaecati a quia. Iusto, dolorem.
                 asperiores eos deserunt tempore eaque eius maxime quos beatae iure voluptatem
                sed quod dignissimos quis dolores! Neque id <br /> <br />
                sit amet consectetur adipisicing elit. Vel nemo soluta tempora, excepturi
               unde molestias optio asperiores eos deserunt tempore eaque eius maxime quos beatae iure voluptatem
                sed quod dignissimos quis dolores! Neque id possimus sed incidunt iure, facilis omnis distinctio
                 rem atque ea, doloremque obcaecati a quia. Iusto, dolorem.
                 asperiores eos deserunt 
            </p>
          </div>
          <img src={chef} alt="" className=' object-contain w-full md:w-[50%] mt-[-50px]'/>
        </div>
      </div>

    </div>
  )
}

export default AboutComponent