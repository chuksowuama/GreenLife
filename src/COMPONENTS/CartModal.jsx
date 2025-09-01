import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useActionData } from "react-router-dom";
import UsereduxFunctionhook from "../HookComponent/UsereduxFunctionhook";
import Clickouthook from "../HookComponent/Clickouthook";

const CartModal = ({ closeTheModal, itemID, mode }) => {
  const [curentAdded, setCurrentAdded] = useState(null);
  const cartinModal = useSelector((state) => state.stored.cart);
  const expandreduxer = useSelector((state) => state.stored.expand);
  const [totalItem, setTotalItem] = useState(0);
  const{addToCartwishList,Compare}=UsereduxFunctionhook();
  // this is the content inside the expanded modal
  const[expandImg,setexpandImg]=useState(null)
  const shipping = 7;
  const removeCartModal=useRef(null)


  useEffect(() => {
    const theTotalitem = cartinModal.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalItem(Math.ceil(theTotalitem));
  }, [cartinModal]);

  useEffect(() => {
    if (itemID&&mode==="cart") {
      const foundItem = cartinModal.find((item) => item.id === itemID);
      setCurrentAdded(foundItem);
    }else if(itemID&&mode==="expand"){
      const foundItem=expandreduxer.find((item)=>item.id===itemID)
      setCurrentAdded(foundItem)
    }
  }, [cartinModal, itemID,expandreduxer]);
   
  Clickouthook(removeCartModal,closeTheModal)

  return (
    <>
      <div
        className="fixed backdrop-brightness-50 -md bg-bgroundcolor/90 back 
     z-40 w-full h-full top-0 left-0 flex justify-center items-center overflow-y-scroll py-10 " 
      >
        <div className={`sm:mt-60 md:mt-24 w-6/7  bg-secondary rounded-2xl`}>
          <div className="shadow px-2.5 border-gray-400 py-2 flex justify-between items-center">
            <h2 className="sm:text-[0.92rem] md:text-[1.3rem] font-medium">
              {" "}
              {mode==="cart"&& <span><i class="fas fa-check"></i> {curentAdded
                ? " Product Successfully added to your shopping cart"
                : " Product Successfully removed this item from your shopping cart"}</span> }
            </h2>
            <i
              class="fa-solid fa-xmark sm:text-[1rem] cursor-pointer md:text-2xl font-medium"
              onClick={closeTheModal}
            ></i>
          </div>
          {mode === "cart" && curentAdded && (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 p-3 gap-3" ref={removeCartModal}>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="p-4 sm:h-72 md:h-64 w-full lg:h-72">
                  <img
                    src={curentAdded.images?.[0]}
                    alt=""
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className=" sm:space-y-3 md:space-y-5">
                  <h3 className="sm:text-[1rem] lg:text-[1.3rem] font-semibold md:mb-5 text-texted">
                    {curentAdded.name}
                  </h3>
                  <p className="font-semibold">
                    category:{" "}
                    <span className="font-semibold  text-gray-700">{curentAdded.category}</span>
                  </p>
                  <p className="font-semibold">
                    quantity:{" "}
                    <span className="font-semibold  text-gray-700">{curentAdded.quantity}</span>
                  </p>
                  <p className="font-semibold">
                    in stock:{" "}
                    <span className="font-semibold  text-gray-700">{curentAdded.stock}</span>{" "}
                  </p>
                  <p className="font-semibold">
                    Price:{" "}
                    <span className="font-semibold text-gray-700">
                      {" "}
                      NGN {curentAdded.price}
                    </span>{" "}
                  </p>
                </div>
              </div>
              {/* right side of the modal */}
              <div>
                <div className="flex flex-col gap-2 font-semibold">
                  <h3 className="sm:text-[1rem] lg:text-[1.3rem] font-semibold md:mb-5 text-gray-700">
                    There are {cartinModal.length} items in your cart.
                  </h3>
                  <p className="flex">
                    SubTotal:{" "}
                    <span className="font-semibold text-gray-700"> NGN {totalItem}</span>
                  </p>
                  <p className="flex">
                    shipping:{" "}
                    <span className="font-semibold text-gray-700"> NGN {shipping}</span>
                  </p>
                  <p className="flex">
                    Total tax excl:{" "}
                    <span className="font-semibold text-gray-700">
                      {" "}
                      NGN {totalItem + shipping}
                    </span>
                  </p>
                  <p className="flex">
                    Total tax incl:{" "}
                    <span className="font-semibold text-gray-700">
                      {" "}
                      NGN {totalItem + shipping}
                    </span>
                  </p>
                  <p className="flex">
                    {" "}
                    <span className="font-semibold text-gray-700">NGN Taxes: {0}</span>
                  </p>
                </div>
                <div className="flex sm:flex-col sm:items-center md:flex-row md:gap-3">
                  <Link to={`/CartPage`}>
                    <button className="button2 md:w-30">View cart</button>
                  </Link>
                  <Link>
                    <button className="button2 md:w-30">Check Out</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {mode === "expand" && curentAdded && (
            <div className="flex sm:flex-col md:flex-row gap-3 p-3 sm:mt-20 md:mt-0" ref={removeCartModal}>
              {/* right side of the modal */}
                <div className=" flex flex-col justify-between gap-30 sm:hidden md:block">
                  <div className="w-full h-90 border-gray-400 border gap-3 p-3">
                    <img src={expandImg||curentAdded?.images?.[0]} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex gap-3 sm:justify-center ">
                    {
                    curentAdded?.images?.map((item)=>(
                        <div className="w-20 h-20 border border-gray-400"><img src={item} alt="" className="w-full h-full cursor-pointer" onClick={()=>setexpandImg(item)} /></div>
                      ))
                    }
                  </div>
                </div>
              {/* right side of the modal */}
                <div className="border-l-2 border-gray-300 flex flex-col justify-around space-y-2 gap-3 px-5 py-3">
                  <h3 className="text-texted">{curentAdded.name}</h3>
                  <p className="text-quintanary font-semibold">{curentAdded.rating}</p>
                   <p className="text-[1.3rem] font-bold">{curentAdded.price}</p>
                   <p className="text-gray-600">Delivered within 2-3 days</p>
                   <p className="text-gray-700">{curentAdded.description.slice(0,500).concat("...")}</p>
                   <hr className="text-gray-400" />
                   <div className="flex flex-wrap flex-col gap-5 items-center">
                    <button className="button2" onClick={()=>addToCart(curentAdded)}>add to cart</button>
                    <div className="flex justify-center gap-5 text-[0.9rem] text-texted font-semibold [&>span]:hover:text-gray-400 [&>span]:cursor-pointer sm:flex-wrap ">
                      <span onClick={()=>wishList(curentAdded)}><i class="fa-solid fa-heart"></i>add to wishList</span>
                      <span onClick={()=>Compare(curentAdded)}><i class="fa-solid fa-arrows-rotate"></i>add to compare</span>
                    </div>
                   </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;