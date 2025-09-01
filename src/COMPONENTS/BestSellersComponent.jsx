import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useSelector } from 'react-redux';
import ProductsCard from './ProductsCard';
import Productscarousel from './Productscarousel';


const BestSellersComponent = ({openCartModal,expandProductModal}) => {
  const greenData=useSelector(state=>state.stored.items)
  const slicedData=greenData.slice(15,20)
  const filtereofdata=greenData.filter(item=>item.subcategory === "citrus")
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
              breakpoints={{
              275: { slidesPerView: 1, spaceBetween: 10 },
              766: { slidesPerView: 2, spaceBetween: 10 },
              1200: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="w-full p-20"
          >
           {
            <Productscarousel GreenProduct={slicedData} openCartModal={openCartModal} expandProductModal={expandProductModal}  />
           }
          </Swiper>
          </div>
         </div>
    </>
  )
}

export default BestSellersComponent
