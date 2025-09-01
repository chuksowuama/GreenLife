import React from "react";
import { useSelector } from "react-redux";
import bannerImg from "../assets/sidefilterBanner.jpg";
import MiniProductCardComponent from "./MiniProductCardComponent";
import FilterbysideComponent from "./FilterbysideComponent";

const SideFilterComponent = () => {
  const GreenData = useSelector((state) => state.stored.items);
  const newProduct = GreenData.slice(40, 45);
  const mostViewd = GreenData.slice(46, 50);

  return (
    <>
      <div className="flex sm:flex-col-reverse lg:flex-col gap-6 sm:px-4 md:px-10 lg:px-0">
        {/* side banner */}
          <div className="sm:full md:w-full md:h-130 lg:h-full lg:w-full sm:p-0 md:p-0  relative overflow-hidden">
            <img
              src={bannerImg}
              alt=""
              className="w-full h-full md:object-fit scale-120 brightness-50 hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <div className=" w-60 absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-center text-secondary md:text-[1rem]">
                New Trending
              </p>
              <h2 className="text-secondary sm:text-[1.7rem] md:text-[1.3rem]">
                Flats Upto 60% Off
              </h2>
            </div>
          </div>

       <div className="flex sm:flex-col md:flex-row  lg:flex-col gap-4">
         {/* new Products  */}
        <div className="sm:full md:w-100 lg:w-full border border-gray-400 rounded-2xl py-4 px-2">
          <p className=" py-2 font-semibold text-2xl text-texted">
            New products
          </p>
          <hr className="mb-1.5 text-gray-400 p-0.5 w-full mx-auto" />
          <div className="flex flex-col gap-3">
            {newProduct.map((item) => (
              <MiniProductCardComponent item={item} />
            ))}
          </div>
        </div>

        {/* mostViewd products */}
        <div className="sm:full md:w-100 lg:w-full border border-gray-400 rounded-2xl py-4 px-2">
          <p className=" py-2 font-semibold text-2xl text-texted">Most Viewd</p>
          <hr className="mb-1.5 text-gray-400 p-0.5 w-full mx-auto" />
          <div className="flex flex-col gap-3">
            {mostViewd.map((item) => (
              <MiniProductCardComponent item={item} />
            ))}
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default SideFilterComponent;
