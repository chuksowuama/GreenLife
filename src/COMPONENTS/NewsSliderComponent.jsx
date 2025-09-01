import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { newsUpdatesData } from "../assets/Data";
import { Link } from "react-router-dom";

const NewsSliderComponent = () => {
  return (
    <>
     <div>
       <div className="text-center py-4 space-y-5">
        <h1 className="font-semibold">From the blog</h1>
        <h3>Get latest update & news </h3>
      </div>
      <div>
         <Swiper
        spaceBetween={10}
        autoplay={{ delay: 4000 }}
        navigation={false}
        modules={[Navigation,Autoplay]}
          breakpoints={{
          275: { slidesPerView: 1, spaceBetween: 10 },
          766: { slidesPerView: 2, spaceBetween: 10 },
          1200: { slidesPerView: 4, spaceBetween: 12 },
        }}
        className="w-full p-20"
      >
        {newsUpdatesData.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/news/${item.id}`}>
             <div className='px-3 shadow shadow-gray-200 h-full my-2 [&>] '>
             <div className=' bg-gray-200 w-full h-[250px]'>
                <img src={item.image} alt=""
                className='w-full h-full object-cover'
                 />
            </div>
            <div className='p-2 space-y-2 h-[200px]'>
               <p className='font-light text-gray-500'>{item.date}</p>
                <p className='font-light text-gray-500'>{item.category}</p>
                <p className='font-extrabold text-[17px] text-texted'>{item.title}</p>
            </div>
           </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
     </div>
    </>
  );
};

export default NewsSliderComponent;
