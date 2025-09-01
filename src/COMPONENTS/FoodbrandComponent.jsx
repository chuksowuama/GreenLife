import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import brandimages1 from "../assets/Brandimgage/1.jpg"
import brandimages2 from "../assets/Brandimgage/2.jpg"
import brandimages3 from "../assets/Brandimgage/4.jpg"
import brandimages4 from "../assets/Brandimgage/5.jpg"
import brandimages5 from "../assets/Brandimgage/10.jpg"
import brandimages6 from "../assets/Brandimgage/11.jpg"
import brandimages7 from "../assets/Brandimgage/12.jpg"


  const brandimages = [
    brandimages1,brandimages2,brandimages3,brandimages4,brandimages5,brandimages6,brandimages7,
    brandimages1,brandimages2,brandimages3,brandimages4,brandimages5,brandimages6,brandimages7
  ]



const FoodbrandComponent = () => {
  return (
    <>
       <div className=' bg-[#F5F7FB] py-15 px-10'>
        <div className="text-center py-4 space-y-5">
        <h1 className="font-semibold">Top Brands</h1>
        <h3>Shop by popular brands </h3>
      </div>
      <div className='bg-[]'>
         <Swiper
        spaceBetween={10}
        autoplay={{ delay: 4000 }}
        navigation={false}
        modules={[Navigation,Autoplay]}
          breakpoints={{
          275: { slidesPerView: 3, spaceBetween: 2 },
          766: { slidesPerView: 5, spaceBetween: 10},
          1200: { slidesPerView: 8, spaceBetween: 15 },
        }}
        className="w-full p-20"
      >
        {brandimages.map((item) => (
          <SwiperSlide key={item.id}>
             <div className='cursor-pointer sm:full md:w-full lg:w:35 h-20 flex p-1  justify-center items-center shadow bg-[#ffff]'>
                <img src={item} alt=""
                className='w-full h-full object-contain grayscale transition duration-300 hover:grayscale-0'
                 />
           </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
       </div>
     </>
  )
}

export default FoodbrandComponent
