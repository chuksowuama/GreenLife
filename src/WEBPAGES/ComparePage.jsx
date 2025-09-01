import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";

const ComparePage = () => {
  const compare = useSelector((state) => state.stored.compare);

  console.log(compare);
  return (
    <>
      <div className="pageMargin grid md:grid-cols-1 lg:grid-cols-5 sm:px-3 lg:px-15 gap-4">
        {/* Sidebar filter */}
        <div className=" sm:order-2 lg:order-1 w-full">
          <SideFilterComponent />
        </div>

        {/* Compare content */}
        <div className=" md:col-span-4 sm:order-1 lg:order-2 space-y-3 p-3">
         <div>
                    {compare.length > 0 && compare.length<=3 ? (
            <div className="flex gap-1">
              {/* First column (labels / info categories) */}
              <div className="flex-1/2">
                <div className="border border-gray-400 h-60 flex items-center justify-center">
                </div>
                <div className="border border-gray-400 h-16 flex items-center px-2">
                  product Name
                </div>
                <div className="border border-gray-400 h-16 flex items-center px-2">
                  price
                </div>
                <div className="border border-gray-400 h-16 flex items-center px-2">
                  category
                </div>
                <div className="border border-gray-400 h-16 flex items-center px-2 ">
                  subcategory
                </div>
                <div className="border border-gray-400 h-16 flex items-center px-2">
                  origin
                </div>
                <div className="border border-gray-400 h-16 flex items-center px-2">
                  culinary_uses
                </div>
                <div className="border border-gray-400 h-16 flex items-center px-2 ">
                  price_unit
                </div>
                <div className="border border-gray-400 h-16 flex items-center px-2">
                  available
                </div>
              </div>

              {/* Product columns */}
              {compare.map((item, index) => (
                <div key={index} className="flex-3/4">
                  {/* Image should be bigger */}
                  <div className="border border-gray-400 h-60 flex items-center justify-center">
                    <img
                      src={item?.images?.[0]}
                      alt={item?.name || "Product"}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Other features */}
                  <div className="border border-gray-400 h-16 flex items-center justify-center">
                    {item?.name}
                  </div>
                  <div className="border border-gray-400 h-16 flex items-center justify-center">
                    {item?.price}
                  </div>
                  <div className="border border-gray-400 h-16 flex items-center justify-center">
                    {item?.category}
                  </div>
                  <div className="border border-gray-400 h-16 flex items-center justify-center">
                    {item?.subcategory}
                  </div>
                  <div className="border border-gray-400 h-16 flex items-center justify-center">
                    {item?.origin}
                  </div>
                  <div className={`border border-gray-400 ${item.culinary_uses.length===5?"h-35":"h-16"} flex items-center flex-wrap justify-center`}>
                    {item?.culinary_uses?.map((use,ind)=>(
                      <span>{use}{ind<item.culinary_uses.length-1?",":null}</span>
                    )) }
                  </div>
                  <div className="border border-gray-400 h-16 flex items-center justify-center">
                    {item?.price_unit}
                  </div>
                  <div className="border border-gray-400 h-16 flex items-center justify-center">
                    {item?.available?"instock":"out of stock"}
                  </div>
                </div>
              ))}
            </div>
          ) : 
             <div className="flex flex-col gap-3 h-full p-6">
              <h2 className="text-gray-600 text-[1.6rem]">
                Products Comparison
              </h2>
              <p className="border-2 py-3 px-3 border-red-600 bg-red-300 text-gray-600 font-bold">
                {compare.length>3?"you cannot Compare more than 3 product, remove some items":"There are no Products Selected for Comparison"}
              </p>
            </div>
          }
         </div>
          <Link to={"/"}>
                <button className="bg-primary px-7 py-3 cursor-pointer text-secondary font-semibold rounded-2xl">
                  Continue shopping
                </button>
              </Link>
        </div>
      </div>
    </>
  );
};

export default ComparePage;
