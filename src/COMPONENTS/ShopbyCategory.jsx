import React, { useEffect } from "react";
import Productscarousel from "./Productscarousel";
import herobanner1 from "../assets/shopcategory banner1.webp";
import herobanner2 from "../assets/shopcategory banner2.webp";
import herobanner3 from "../assets/shopcategory banner3.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import cateImage1 from "../assets/33-cp_categorylist.jpg";
import cateImage2 from "../assets/32-cp_categorylist.jpg";
import cateImage3 from "../assets/37-cp_categorylist.jpg"; 
import cateImage4 from "../assets/36-cp_categorylist.jpg"; 
import cateImage5 from "../assets/leafygreen.jpg"; 
import cateImage6 from "../assets/34-cp_categorylist.jpg";
import cateImage7 from "../assets/35-cp_categorylist.jpg"
import cateImage8 from  "../assets/juicecate.jpg"

import BannerComponent from "./BannerComponent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// 

const ShopbyCategory = () => {
  const Greenpoducts = useSelector((state) => state.stored.items);

  const categoriz = [
    ...new Set(Greenpoducts.map((items) => items.subcategory)),
  ];
  console.log(categoriz);

  const citrus = Greenpoducts.filter(
    (item) => item.subcategory === categoriz[0]
  ).name;
  const berries = Greenpoducts.filter(
    (item) => item.subcategory === categoriz[1]
  ).length;
  const tropical = Greenpoducts.filter(
    (item) => item.subcategory === categoriz[2]
  ).length;
  const leafygreens = Greenpoducts.filter(
    (item) => item.subcategory === categoriz[3]
  ).length;
  const cruciferous = Greenpoducts.filter(
    (item) => item.subcategory === categoriz[4]
  ).length;
  const smoothies = Greenpoducts.filter(
    (item) => item.subcategory === categoriz[5]
  ).length;
  const coldpressed = Greenpoducts.filter(
    (item) => item.subcategory === categoriz[6]
  ).length;

  const brandimages = [
    { id: 1,name:"smoothies", image:cateImage1, product: smoothies,path: "/products/smoothies",bgColor:"#FCEDE8"},

    { id: 2,name:"citrus",image: cateImage2, product: citrus,path: "/products/citrus",bgColor:"#FFF0FF" },

    { id: 3,name:"berries",image: cateImage3, product: berries,path: "/products/berries",bgColor:"#F4FCE8"  },

    { id: 4,name:"tropical",image: cateImage4, product: tropical,path: "/products/tropical",bgColor:"#FCEDE8"  },

    { id: 5,name:"leafy-greens",image: cateImage5, product: leafygreens,path: "/products/leafy-greens",bgColor:"#F4FCE8" },

    { id: 6,name:"cruciferous",image: cateImage6, product: cruciferous,path: "/products/cruciferous",bgColor:"#FFF0FF" },

    { id: 7,name:"root",image:cateImage7, product: cruciferous,path: "/products/root",bgColor:"#FFF0FF" },

    { id: 8,name:"cold-pressed",image: cateImage8, product: cruciferous,path: "/products/cold-pressed",bgColor:"#FFF0FF" },
  ];

  return (
    <>
      <div className="mt-4">
        <div className="text-center py-4 space-y-2">
          <h1 className="font-semibold">Latest collection</h1>
          <h3>Shop by category</h3>
        </div>

        <div>
          <div className="py-10">
            <Swiper
              spaceBetween={10}
              autoplay={{ delay: 4000 }}
              navigation={false}
              modules={[Navigation, Autoplay]}
              breakpoints={{
                275: { slidesPerView: 3, spaceBetween: 2 },
                766: { slidesPerView: 5, spaceBetween: 10 },
                1200: { slidesPerView: 6, spaceBetween: 15 },
              }}
              className="w-full"
            >
              {brandimages.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={item.path}>
                  <div className={`flex flex-col mx-2 cursor-pointer sm:full md:w-full lg:w:full h-72  p-1  justify-center items-center shadow`} style={{ backgroundColor: item.bgColor }}>
                    <img src={item.image} alt="" />
                    <p className="text-gray-500">{item.name}</p>
                  </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-7 sm:grid-cols-1 sm:px-5 md:px-0">
          <BannerComponent
            bannerimg={herobanner1}
            bannerStamp={"only this week"}
            bannerHeader={"fresh vegetable big discount offer sale"}
          />
          <BannerComponent
            bannerimg={herobanner2}
            bannerStamp={"-12% off"}
            bannerHeader={"keep calm and drink fresh juice "}
          />
          <BannerComponent
            bannerimg={herobanner3}
            bannerStamp={"-12% off"}
            bannerHeader={"keep calm and drink fresh juice"}
          />
        </div>
      </div>
    </>
  );
};

export default ShopbyCategory;
