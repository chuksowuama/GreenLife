import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Clickouthook from "../HookComponent/Clickouthook";
import MiniProductCardComponent from "./MiniProductCardComponent";
import { useState } from "react";
import CartSlidecards from "./CartSlidecards";
import { Link } from "react-router-dom";

const CartSlider = ({ closecart }) => {
  const cartResult = useSelector((state) => state.stored.cart);
  const removeCart = useRef(null);
  const [totalItem, setTotalItem] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);
    const shipping = 7;

  useEffect(() => {
    const theTotalitem = cartResult.reduce((acc, item) => acc + (item.price * item.quantity) , 0);
    setTotalItem(Math.ceil(theTotalitem));
  }, [cartResult]);
 

  Clickouthook(removeCart, closecart);
  return (
    <div className="z-40 backdrop-brightness-50 -md bg-bgroundcolor/90 fixed w-full h-full back">
      <div
        className="slideincart fixed bg-secondary top-0 right-0 sm:w-3/4 md:w-1/2 lg:w-90 h-dvh"
        ref={removeCart}
      >
        <div className="flex justify-between items-center py-2 px-2 bg-primary text-secondary">
          <h3 className="text-secondary sm:text-[1rem] md:text-[1.4rem]">Shopping cart ({cartResult.length})</h3>
          <span onClick={closecart}>
            <i class="fa-solid fa-xmark text-2xl cursor-pointer sm:text-[0.9rem] md:text-[1.2rem]"></i>{" "}
          </span>
        </div>
        {/* this is the actulual cart products cards */}
        <ul className="flex flex-col gap-2 border-b-[1.3px] border-gray-400 sm:h-55 md:h-72 lg:h-1/2 overflow-y-scroll border">
          {cartResult &&
            cartResult.map((iteminCart) => (
              <li className="p-3 border-t-[1.3px] border-b-[1.3px] border-gray-400">
                {<CartSlidecards item={iteminCart} />}
              </li>
            ))}
        </ul>
        {/* total items in cart */}
        <div className="h-full flex flex-col gap-4 p-5 ">
          <div className="flex flex-col gap-3 font-semibold">
            <p className="flex justify-between ">
              <span className="font-semibold" >{cartResult.length} items </span> ₦ {totalItem}
            </p>
            <p className="flex justify-between">
              shipping <span> ₦ {shipping}</span>
            </p>
          </div>
          {/* lower bottom of the total */}
          <div className="flex flex-col gap-2 font-semibold">
            <p className="flex justify-between">Total tax excl.: <span className="font-semibold" > ₦ {totalItem+ shipping}</span></p>
            <p className="flex justify-between">Total tax incl: <span className="font-semibold" > ₦ {totalItem + shipping}</span></p>
            <p className="flex justify-between">NGN Taxes {0}</p>
          </div>
          <div className="flex sm:flex-col sm:items-center md:flex-row md:justify-center md:gap-3">
             <Link to={`/CartPage`} onClick={closecart}>
              <button className="button2">View cart</button>
             </Link>
             <Link onClick={closecart}>
             <button className="button2">Check Out</button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSlider;
