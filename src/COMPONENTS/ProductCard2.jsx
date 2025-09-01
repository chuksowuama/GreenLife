import React, { useEffect, useState } from "react";

import { useMediaQuery } from "react-responsive";
import {useSelector } from "react-redux";
import UsereduxFunctionhook from "../HookComponent/UsereduxFunctionhook";
import { Link } from "react-router-dom";



const ProductCard2 = ({item,changeview,openCartModal,expandProductModal}) => {
   const laptop = useMediaQuery({ query: "(min-width:1200px)" });
   const cartResult=useSelector(state=>state.stored.cart)
   const[cartId,setCartid]=useState({})
   const{wishList,Compare,expandProduct,addToCart,viewedProduct}=UsereduxFunctionhook()

   useEffect(()=>{
     const cartitem=cartResult.find((cartitems)=>cartitems.id===item.id)
      setCartid(cartitem)
   },[cartResult,item])

  return (
    <>
     <div className={` group py-3 px-3 border border-gray-400 rounded-2xl h-full my-2 [&>button]:hover:bg-primary cursor-pointer flex ${changeview?"flex-col":"lg:flex-row sm:flex-col sm:items-start lg:items-start"}`}>
             <div className=' bg-gray-200 w-full sm:h-72 lg:h-60 relative overflow-hidden'>
                 <Link to={`/details/${item.id}`} onClick={()=>viewedProduct(item)} >
                  <img src={item.images?.[0]} alt=""
                className='w-full h-full sm:object-fill group-hover:brightness-50 transition-all duration-300 ease-in-out'  
                 />
                 </Link>
                 <div className='absolute w-full py-2 px-4 top-0 left-0 flex justify-between'>
                    <p className='text-[13px]  py-0.5 px-1.5 bg-quintanary text-center text-secondary rounded-tl-2xl rounded-br-2xl'>New</p>    
                <span className='absolute -right-20 group-hover:right-4 opacity-0 group-hover:opacity-100 top-20 gap-5 flex flex-col transition-all duration-300 ease-in-out'>
                  <i class="fa-solid fa-maximize text-[19px] cursor-pointer text-secondary" onClick={(e)=>{e.stopPropagation();expandProduct(item);expandProductModal(item.id)}} ></i>
                 <i class="fa-solid fa-arrows-rotate text-[19px] cursor-pointer text-secondary" onClick={()=>Compare(item)}></i>
                  <i class="fa-solid fa-heart text-[19px] cursor-pointer text-secondary" onClick={()=>wishList(item)}></i>
                </span>
                </div>
            </div>
            <div className='p-2 space-y-2'>
                <p className='font-light text-gray-500'>{item.category}</p>
                <Link to={`/details/${item.id}`} onClick={()=>viewedProduct(item.id)}><p className='font-extrabold text-[0.9rem] text-texted truncate' >{item.name}</p></Link>
                <p className='text-quintanary font-extrabold'>{item.rating}</p>
                 {laptop?!changeview&& <p>{item.description.slice(0,250).concat("...")}</p>:null}
            </div>
            <div className=" w-full lg:mt-5 flex flex-col gap-4">
               <p className='text-[17px] font-bold '>NGN{item.price}</p>
              <button className={`py-3 text-[1rem] px-2 rounded-2xl bg-gray-300 ${changeview?"group-hover:bg-primary text-primary group-hover:text-secondary ":"bg-primary"}font-bold cursor-pointer w-full`}
               onClick={(e)=>{e.stopPropagation();addToCart(item);openCartModal(item.id)}}>{!cartId?"Add To Cart":"Remove from Cart"}</button>
            </div>
           </div>
    </>
  );
};

export default ProductCard2;
 