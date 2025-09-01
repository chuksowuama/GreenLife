import React from 'react'
import herobanner1 from "../assets/bestDealbanner1.webp"
import herobanner2 from "../assets/bestDealbanner2.webp"
import herobanner3 from "../assets/bestDealbanner3.webp"
import herobanner4 from "../assets/bestDealbanner4.webp"
import Productscarousel from './Productscarousel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import ProductsCard from './ProductsCard'
import { useSelector } from 'react-redux'
import BannerComponent from './BannerComponent'


const BestdealsComponent = () => {
    const greenData=useSelector(state=>state.stored.items)
  const slicedData=greenData.slice(45,50)
  return (
   <>
   <div>
      <div className="text-center py-4 space-y-5">
        <h1 className="font-semibold">My collection</h1>
        <h3>Best deals of week</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 sm:grid-cols-1 sm:px-6 md:px-0">
        <BannerComponent bannerClass={"overflow-hidden relative sm:h-[300px] md:h-[450px] md:rounded-2xl"} bannerimg={herobanner1} bannerStamp={"only this week"} bannerHeader={"Honoring taste and texture together"}/>
        <BannerComponent bannerClass={"overflow-hidden relative sm:h-[300px] md:h-[450px] md:rounded-2xl"} bannerimg={herobanner2} bannerStamp={"-12% off"} bannerHeader={"Grain of pure sweetness golden"}/>
        <BannerComponent bannerClass={"overflow-hidden relative sm:h-[300px] md:h-[450px] md:rounded-2xl"} bannerimg={herobanner3} bannerStamp={"-12% off"} bannerHeader={"Stay strong with the power of milk "}/>
        <BannerComponent bannerClass={"overflow-hidden relative sm:h-[300px] md:h-[450px] md:rounded-2xl"} bannerimg={herobanner4} bannerStamp={"-12% off"} bannerHeader={"Golden spice for every kitchen"}/>
      </div>
       <div>
        <div className="text-center py-4 space-y-5">
        <h1 className="font-semibold">My collection</h1>
        <h3>Best deals of week</h3>
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
          1200: { slidesPerView: 2, spaceBetween: 12 },
        }}
        className="w-full"
      >
        {slicedData.map((item) => (
          <SwiperSlide key={item.id}>
            {/* <Link to={`/details/${item.path}`}> */}
             <div className='max-w-3xl py-2.5 px-1 bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:items-center md:flex-row border border-gray-300 md:justify-between gap-7'>
             <div className="md:w-1/3 w-full h-48 md:h-auto">
                <img src={item.images?.[0]} alt=""
                 className="w-full h-full object-cover"
                 />
                <span className='absolute w-full py-2 px-4 top-0 left-0 flex justify-between'>
                    <p className='text-[13px]  py-0.5 px-1.5 bg-quintanary text-center text-secondary rounded-tl-2xl rounded-br-2xl'>New</p>
                    <i class="fa-solid fa-heart text-[16px] cursor-pointer"></i>
                </span>
            </div>
            <div className="md:w-2/3 flex flex-col justify-between p-4 space-y-2 flex-1">
                <p className='font-extrabold text-[17px] text-texted'>{item.title}</p>
                <p className='text-quintanary font-extrabold'>{item.rating}</p>
                <p className='text-[17px] font-bold'>NGN{item.price}</p>
                <p className='text-[17px] font-bold'>availabilty:{item.avaialable}</p>
            </div>
           </div>
            {/* </Link> */}
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
       </div>
    </div>
   </>
  )
}

export default BestdealsComponent
