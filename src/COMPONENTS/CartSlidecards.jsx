import React from 'react'
import { setAddtocart, setIncreaseCart, setReMoveCart } from '../ReduxFolder'
import { useDispatch, useSelector } from 'react-redux'
import UsereduxFunctionhook from '../HookComponent/UsereduxFunctionhook'

const CartSlidecards = ({item}) => {
    const{addToCart,increaseProduct,reduceProduct}=UsereduxFunctionhook()


  return (
     <>
      <div className="flex gap-4 items-center justify-between ">
        <div className="w-15 h-15 bg-amber-600">
          <img src={item.images?.[0]} alt="" className="w-full h-full" />
        </div>
        <div>
          <p className="font-semibold text-texted text-[0.8rem]">{item.name}</p>
          <p className="font-bold">NGN {item.price}</p>
          <p className='border flex justify-around items-center'>
            <span onClick={()=>increaseProduct(item)}><i class="fa-solid fa-plus"></i></span> {item.quantity} <span onClick={()=>reduceProduct(item)}><i class="fa-solid fa-minus"></i></span>
          </p>
        </div>
        <span onClick={()=>addToCart(item)}><i class="fa-solid fa-xmark text-2xl cursor-pointer"></i>{" "}</span>
      </div>
    </>
  )
}

export default CartSlidecards
