import React from "react";
import Productscarousel from "./Productscarousel";
import herobanner1 from "../assets/featuredProductbanner.webp"
import herobanner2 from "../assets/featuredProductbanner2.webp"
import herobanner3 from "../assets/featuredProductbanner3.webp"
import { useSelector } from "react-redux";
import BannerComponent from "./BannerComponent";


const TrendingFeaturedProduct = ({openCartModal,expandProductModal}) => {
    const greendata = useSelector((state) => state.stored.items);
    const TrendingFeatures=greendata.slice(20,27)
    // const[cartModal,setCartModal]=useState(false)




  return (
    <>
      <div className="text-center py-4 space-y-5">
        <h1 className="font-semibold">Trending item</h1>
        <h3>Featured products </h3>
      </div>
      <div>{<Productscarousel GreenProduct={TrendingFeatures} openCartModal={openCartModal} expandProductModal={expandProductModal}  />}</div>
      <div className="grid md:grid-cols-3 gap-4 mt-7 sm:grid-cols-1 sm:px-5 md:px-0">
        <BannerComponent bannerimg={herobanner1} bannerStamp={"only this week"} bannerHeader={"We will handle the care of products"}/>
        <BannerComponent bannerimg={herobanner2} bannerStamp={"-12% off"} bannerHeader={"Workshop for full grain baking"}/>
        <BannerComponent bannerimg={herobanner3} bannerStamp={"-12% off"} bannerHeader={"A streamlining your food journey "}/>
      </div>
    </>
  );
};

export default TrendingFeaturedProduct;
