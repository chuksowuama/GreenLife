import React from "react";
import herobanner2 from "../assets/heroBanner2.webp";
import herobanner3 from "../assets/heroBanner3.webp";
import Carouimg1 from "../assets/herosliderimage1.webp";
import Carouimg2 from "../assets/herosliderimage2.webp";
import Carouimg3 from "../assets/herosliderimage3.webp";
import Icon1 from "../assets/fast devlivery.png";
import Icon2 from "../assets/fresh vegetables.png";
import Icon3 from "../assets/best online support.png";
import Icon4 from "../assets/securedPayment.png";
import CarouselSliderComponent from "./CarouselSliderComponent";
import FooterAccordion from "./FooterAccordion";
import BannerComponent from "./BannerComponent";

const Herosection = () => {
  const carouselinfo = [
    {
      id: 1,
      image: Carouimg1,
      heading: "organic foods",
      info: "Various vegetables fruits available your store",
      subinfo: "vegetables are part of plants that are consumed,",
      path: "/",
      pathname: "shop now",
    },
    {
      id: 2,
      image: Carouimg2,
      heading: "organic foods",
      info: " Enrich your feed among some chili love",
      subinfo: "vegetables are part of plants that are consumed,",
      path: "/",
      pathname: "shop now",
    },
    {
      id: 3,
      image: Carouimg3,
      heading: "organic foods",
      info: "All fruits & Veggies are offered at your store",
      subinfo: "vegetables are part of plants that are consumed,",
      path: "/",
      pathname: "shop now",
    },
  ];

  const offerinfo = [
    {
      icon: Icon1,
      heading: "fast shipping",
      iconinfo: "free shipping for orders over",
    },
    {
      icon: Icon2,
      heading: "100% fresh vegetables",
      iconinfo: "Within 30 days for an exchange",
    },
    {
      icon: Icon3,
      heading: "Best online suppot",
      iconinfo: "Within 30 days money return",
    },
    {
      icon: Icon4,
      heading: "Secure payment",
      iconinfo: "Pay with multiple credit cards",
    },
  ];

  const Herobanners = [
    {
      id: 1,
      bannerimg: herobanner2,
      bannerStamp: "only this week",
      bannerHeader: "fresh vegetable big discount offer sale",
      bannerPath: "/product",
    },
    {
      id: 2,
      bannerimg: herobanner3,
      bannerStamp: "-12% off",
      bannerHeader: "keep calm and drink fresh juice ",
      bannerPath: "/product",
    },
  ];

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <div className="sm:row-span-1 sm:col-span-1 md:row-span-2 md:col-span-2 ">
          <CarouselSliderComponent data={carouselinfo} />
        </div>

        <div className="flex flex-col gap-4 sm:px-5 md:px-0">
          {Herobanners.map((item) => (
            <BannerComponent
              bannerimg={item.bannerimg}
              bannerHeader={item.bannerHeader}
              bannerStamp={item.bannerStamp}
              bannerPath={item.bannerPath}
            />
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 sm:2 md:4 gap-5 py-4 ">
        {offerinfo.map((item) => (
          <div className="flex md:justify-center sm:flex-col md:flex-row sm:justify-center sm:items-center gap-3 shadow py-6 bg-gray-200">
            <img src={item.icon} alt="" className="w-15" />
            <div className="text-center">
              <h2 className="text-[15px]">{item.heading}</h2>
              <p className="text-[12px] text-texted">{item.iconinfo}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Herosection;
