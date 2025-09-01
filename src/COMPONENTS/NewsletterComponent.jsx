import React from "react";
import Promobanner from "../assets/Promo.png";

const NewsletterComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-1.5 bg-gray-300 pl-10 py-4 sm:px-5 md:px-5 lg:px-22 sm:mt-15 md:mt-5">
      <div className="flex items-center flex-col justify-center text-center w-full">
        <div className="flex flex-col gap-3">
        <div className="text-center md:pl-3 md:space-y-3 ">
          <h2 className="sm:text-2xl md:text-5xl text-texted">Join our newsletter</h2>
          <p className="sm:text-[15px] md:text-2xl text-texted">Get all latest information on events, sales and offers</p>
        </div>
        <div className="bg-[#F7F7F7] p-3 md:w-[120%] sm:w-[140%] rounded-3xl overflow-hidden flex items-center gap-3.5  relative ">
          <input
            type="text"
            placeholder="Search Products Here.."
            className="md:w-[100%] outline-0 pl-2.5  sm:w-[85%] "
          />
          <span className="md:border w-[120px] p-9 absolute -right-0 md:bg-primary sm:bg-secondary cursor-pointer md:text-secondary">
            suscribe
          </span>
        </div>
      </div>
      </div>
      <div>
        <img src={Promobanner} alt="" />
      </div>
    </div>
  );
};

export default NewsletterComponent;
