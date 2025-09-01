import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const CarouselSliderComponent = ({ data }) => {
  return (
    <>
      <div className="w-full">
        {
          <Swiper
            spaceBetween={4}
            autoplay={{ delay: 4000 }}
            loop={true}
            navigation={false}
            modules={[Pagination, Autoplay]}
            className="w-full sm:h-[450px] md:h-[512px] rounded-lg"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative w-full h-full group cursor-pointer overflow-hidden md:rounded-2xl">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full brightness-90 md:object-cover sm:object-fit transform group-hover:scale-105 transition-transform duration-700"
                  />
                      <div className='absolute sm:top-20 sm:left-2 md:top-14 md:left-14 w-48 sm:space-y-0.5 md:space-y-2 py-3'>
                      <h3 className='sm:text-[14px] md:text-[16px] bg-quintanary py-2 text-center px-1 text-secondary rounded-tl-2xl rounded-br-2xl w-40'>{item.heading}</h3>
                      <h2 className=' sm:text-[20px] md:text-2xl'>{item.info}</h2>
                       <p className='whitespace-nowrap text-texted sm:text-[13px] md:text-[16px]'>{item.subinfo}</p>
                       <h3 className="text-[16px] bg-primary text-secondary mt-4  text-center sm:py-1 md:py-2 rounded-2xl sm:w-30 md:w-40">{item.pathname}</h3>

                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </>
  );
};

export default CarouselSliderComponent;
