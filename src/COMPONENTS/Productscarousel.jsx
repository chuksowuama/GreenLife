import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useMediaQuery } from 'react-responsive';
import ProductsCard from './ProductsCard';

const Productscarousel = ({GreenProduct,openCartModal,expandProductModal}) => {
    function addwtowishlist(){
      console.log("add to wish list")
    }

  return (
    <div>
       <Swiper
        spaceBetween={10}
        autoplay={{ delay: 4000 }}
        navigation={false}
        modules={[Navigation]}
          breakpoints={{
          275: { slidesPerView: 2, spaceBetween: 10 },
          766: { slidesPerView: 3, spaceBetween: 10 },
          1200: { slidesPerView: 5, spaceBetween: 12 },
        }}
        className="w-full h-full"
      >
        {GreenProduct.map((item) => (
          <SwiperSlide key={item.id}>
            {/* <Link to={`/details/${item.path}`}> */}
             <ProductsCard item={item} addtowishlist={addwtowishlist} openCartModal={openCartModal} expandProductModal={expandProductModal}  />
            {/* </Link> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Productscarousel
