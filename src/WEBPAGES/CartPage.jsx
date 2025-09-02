import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";
import UsereduxFunctionhook from "../HookComponent/UsereduxFunctionhook";
import CartpageCard from "../COMPONENTS/CartpageCard";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartResult = useSelector((state) => state.stored.cart);
  const [totalItem, setTotalItem] = useState(0);
  const shipping = 7;

  console.log(cartResult);
   
    useEffect(() => {
      const theTotalitem = cartResult.reduce((acc, item) => acc + (item.price * item.quantity) , 0);
      setTotalItem(Math.ceil(theTotalitem));
    }, [cartResult]);
   

  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-8 sm:px-3 lg:px-13 gap-3">
        <div className="sm:col-span-1 lg:col-span-2 sm:order-3 lg:order-1">
          <SideFilterComponent />
        </div>
        {/* //////the actual cart cards */}
        <div className="sm:col-span-1 lg:col-span-4 border-2 border-gray-400 rounded-[0.6rem] w-full p-2 sm:order-1 lg:order-2">
          {cartResult.length > 0 ? (
            <div>
              {cartResult.map((item) => (
                <div>
                  <CartpageCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="flex flex-col gap-3 h-full p-6">
                <h2 className="text-gray-600 text-[1.6rem]">Your Cart</h2>
                <p className="border-2 py-3 px-3 border-red-600 bg-red-300 text-gray-600 font-bold">
                  there are no Products in your Cart
                </p>
              </div>
              <Link to={"/"}>
                <button className="bg-primary px-7 py-3 cursor-pointer text-secondary font-semibold rounded-2xl">
                  Continue shopping
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* //-----------right side of the cartpage */}
        <div className="space-y-5 sm:col-span-1 lg:col-span-2 sm:order-2 lg:order-3 md:px-20 lg:px-0 ">
          <div className="flex flex-col gap-4 p-5 border-2 border-gray-400">
            <div className="flex flex-col gap-3 font-semibold ">
              <p className="flex justify-between ">
                <span className="font-semibold">
                  {cartResult.length} items{" "}
                </span>{" "}
                ₦ {totalItem}
              </p>
              <p className="flex justify-between">
                shipping <span> ₦ {shipping}</span>
              </p>
            </div>
            {/* lower bottom of the total */}
            <div className="flex flex-col gap-2 font-semibold">
              <p className="flex justify-between">
                Total tax excl.:{" "}
                <span className="font-semibold"> ₦ {totalItem + shipping}</span>
              </p>
              <p className="flex justify-between">
                Total tax incl:{" "}
                <span className="font-semibold"> ₦ {totalItem + shipping}</span>
              </p>
              <p className="flex justify-between">NGN Taxes {0}</p>
            </div>
            <div className="flex lg:justify-center">
              <Link>
                <button className="button2">Check Out</button>
              </Link>
            </div>
          </div>
          {/* ?jehfnekffn */}
          <div className="flex flex-col gap-3 w-full border-4  border-dotted border-gray-500 sm:px-2 md:px-5 py-3">
            <span className="flex gap-5">
              <i className="fas fa-lock text-gray-500 mt-1"></i>
              <p className="text-gray-500 font-light">
                security policy <br />
                (edit with the Customer Reassurance module)
              </p>{" "}
            </span>
            <span className="flex gap-5">
              <i className="fas fa-truck text-gray-500 mt-1"></i>
              <p className="text-gray-500 font-light">
                Delivery policy
                <br />
                (edit with the Customer Reassurance module)
              </p>{" "}
            </span>
            <span className="flex gap-5">
              <i className="fas fa-thumbs-up text-gray-500 mt-1"></i>
              <p className="text-gray-500 font-light">
                Return policy <br />
                (edit with the Customer Reassurance module)
              </p>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
// className="pageMargin grid md:grid-cols-1 lg:grid-cols-3 sm:px-3 lg:px-15 gap-4 border border-red-900"
// className=" sm:order-2 lg:order-1 w-full border"

// className=" md:col-span-4 sm:order-1 lg:order-2 space-y-3 p-3 border"
