import React from 'react'
import UsereduxFunctionhook from '../HookComponent/UsereduxFunctionhook'

const CartpageCard = ({item}) => {
    const{addToCart,increaseProduct,reduceProduct}=UsereduxFunctionhook()
    console.log(item)
  return (
    <div className='flex w-full  border-b-2 border-gray-500 p-5 gap-2'>
      <div>
        <img src={item.images?.[0]} alt="" className='w-20 h-20 object-cover p-2 border-2 border-gray-400' />
      </div>

      <div className='flex-1/2 space-y-3 border-r-2 border-gray-300'>
        <h1 className='text-texted font-semibold text-2xl'>{item.name}</h1>
         <p className='text-gray-500'>{item.category}</p>
         <p className='text-gray-500'><span className='text-texted font-semibold'>calories: </span>{item?.nutrition?.calories}</p>
         <p className='text-yellow-600'><span className='text-texted font-semibold'>Rating: </span> {item.rating}</p>
      </div>

      <div className='flex gap-4 sm:flex-col md:flex-row'>
        <div className='space-y-2'>
          <p className="font-bold">NGN {item.price}</p>
          <p className='shadow flex justify-around items-center [&>span]:cursor-pointer'>
            <span onClick={()=>increaseProduct(item)}><i class="fa-solid fa-plus"></i></span> {item.quantity} <span onClick={()=>reduceProduct(item)}><i class="fa-solid fa-minus"></i></span>
          </p>
        </div>
        <span className='mt-auto hover:bg-gray-300 p-2 cursor-pointer'  onClick={()=>addToCart(item)}><i class="fa-solid fa-xmark text-2xl "></i>{" "}</span>
    </div>
    </div>
    
  )
}


export default CartpageCard
