import { Reviews } from "src/utilities/Review"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import {FreeMode, Pagination} from 'swiper/modules'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Review = () => {

    const breakpoints = {
        320: {
          slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 50
  
          },
        820: {
          slidesPerView: 3,
          spaceBetween: 50

        }
      };
    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])
  return (
    <>
        <div className=" bg-white w-full  py-40  px-10  lg:px-40   ">
            <div className="text-center w-[100%] flex flex-col justify-center items-center"  data-aos = 'fade-down'>
                <h1 className="text-red-600 font-extrabold text-[3rem] sm:text-[4rem]">What Customers Say</h1>
                <p className="text-lg  sm:w-[70%] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio iste unde praesentium ut nulla facilis dolores quidem, quaerat quae dolore nesciunt suscipit fugit voluptatibus ea est architecto a quam.</p>
            </div>
            <div className="cards mt-20" data-aos = 'fade-right'>
                <div className=" w-full text-justify   text-black">
                <Swiper
                    className=" max-w-[100%] xl:max-w-[80%] "
                    // slidesPerView={3}
                    freeMode={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[FreeMode, Pagination]}
                    breakpoints={breakpoints}
                    >
                    {Reviews.map((ReviewData) => (
                    ReviewData.Review?.map((review) => (
                        <div className="" key={review.id}>
                        <SwiperSlide className="">
                            <div className=' shadow-lg p-10  mb-20 cursor-pointer rounded-lg  ' >
                                <div className="flex gap-3 items-center ">
                                    <img
                                        src={review.img} // Use template literals for dynamic import paths
                                        alt={review.name}
                                        className=' border-4 rounded-[100%] object-cover w-[50px] h-[50px] '
                                    />
                                    <div className="">
                                        <p className='text-base text-black'>{review.name}</p>
                                        <p className='text-base text-gray-400'>{review.subTitle}</p>

                                    </div>
                                </div>
                                <p className='text-lg font-light text-black'>{review.details}</p>
                                <div className="flex items-end gap-4">
                                    <img
                                        src={review.stars}  // Use template literals for dynamic import paths
                                        alt={review.name}
                                        className=' w-[100px] h-[20px] object-cover '
                                    />
                                    <span className=" text-lg">{`${review.rating}`}</span>

                                </div>
                                
                            </div>
                        </SwiperSlide>
                        
                        </div>
                        
                    ))
                    ))}
                    </Swiper>

                    
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Review