import React, { useState } from "react";
import ProductsCard from "./ProductsCard";
import bannerimg from "../assets/cms-banner1.png";
import Productscarousel from "./Productscarousel";
import { useSelector } from "react-redux";

const TrendingCategoryComponent = ({openCartModal,expandProductModal}) => {
 const trending=useSelector(state=>state.stored.trendingItems)

  return (
  <>
    <div>
      <div className="text-center py-4 space-y-5">
        <h1 className="font-semibold">Trending item</h1>
        <h3>New products </h3>
      </div>
        <div>{<Productscarousel
          GreenProduct={trending}
          openCartModal={openCartModal}
          expandProductModal={expandProductModal} 
        />}</div>
      <div className="relative mt-10">
        <img src={bannerimg} alt="" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center sm:pt-3 md:pt-4 md:pl-20  md:space-y-3 ">
          <h2 className="text-secondary sm:text-[12.5px] md:text-[25px] whitespace-nowrap ">Delivery On Next Day From 08:00 AM To 08:00 PM</h2>
          <p className="text-secondary sm:text-[10.5px] md:text-[20px] whitespace-nowrap">Get all latest information on events, sales offers in your store</p>
          <button className=".button1 sm:text-[12px] md:text-[20px] sm:text-texted sm:hover:text-quintanary md:hover:text-secondary cursor-pointer ">shop Now</button>
        </div>
      </div>
    </div>
  </>
  );
};

export default TrendingCategoryComponent;
