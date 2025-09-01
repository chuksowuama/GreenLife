import React from "react";
import { testimonialData } from "../assets/Data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const TestimonialComponent = () => {
  return (
    <>
      <div>
        <div className="text-center py-4 space-y-2 mt-4">
          <h1 className="font-semibold">Trending item</h1>
          <h3>Bestseller products</h3>
        </div>
        <div>
          <Swiper
            spaceBetween={10}
            autoplay={{ delay: 4000 }}
            navigation={false}
            modules={[Navigation]}
            direction="horizontal"
            breakpoints={{
              275: { slidesPerView: 1, spaceBetween: 10 },
              766: { slidesPerView: 2, spaceBetween: 10 },
              1200: { slidesPerView: 4, spaceBetween: 12 },
            }}
            className="w-full"
          >
            {testimonialData.map((item) => (
              <SwiperSlide  className="flex h-full items-stretch ">
                <div className=" bg-white shadow-md rounded-xl p-3  flex gap-4 items-start border border-green-200 hover:shadow-lg transition duration-300 w-full h-full">
                  {/* Avatar */}
                  <img
                    src={item.image}
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded-full border-2 border-green-400"
                  />

                  {/* Review Content */}
                  <div className="flex-1 sm:h-40 md:h-52">
                    <h3 className="text-lg font-semibold text-green-700">
                      {item.name}
                    </h3>

                    {/* Stars */}
                    <div className="flex text-yellow-500 text-lg mb-2">
                      {item.rating}
                    </div>

                    {/* Review */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialComponent;
