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
    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])
  return (
    <>
        <div className=" bg-white w-full h-[100vh] p-40  ">
            <div className="text-center w-[100%] flex flex-col justify-center items-center"  data-aos = 'fade-down'>
                <h1 className="text-red-600 font-extrabold text-[4rem]">What Customers Say</h1>
                <p className="text-lg w-[70%] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio iste unde praesentium ut nulla facilis dolores quidem, quaerat quae dolore nesciunt suscipit fugit voluptatibus ea est architecto a quam.</p>
            </div>
            <div className="cards mt-20" data-aos = 'fade-right'>
                <div className=" text-justify flex flex-col  text-black">
                <Swiper
                    className=" max-w-[90%] lg:max-w-[80%] "
                    spaceBetween={50}
                    slidesPerView={3}
                    freeMode={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[FreeMode, Pagination]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    {Reviews.map((ReviewData) => (
                    ReviewData.Review?.map((review, reviewIndex) => (
                        <div className="" key={reviewIndex}>
                        <SwiperSlide className="">
                            <div className=' shadow-lg p-10 w-[300px] mb-20 cursor-pointer rounded-lg ' >
                                <div className="flex gap-3 items-center ">
                                    <img
                                        src={`src/icons/img/${review.img}.jpeg`}  // Use template literals for dynamic import paths
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
                                        src={`src/icons/img/${review.stars}.png`}  // Use template literals for dynamic import paths
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