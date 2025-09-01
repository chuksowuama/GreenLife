import React, { useState } from 'react'
import Productscarousel from './Productscarousel'
import shopcateimage from "../assets/9-cp_categoryproductsslider.jpg"
import { useSelector } from 'react-redux'

const ShopbycategoryComponent = ({openCartModal,expandProductModal}) => {
    const[category, setCategory]=useState("vegetables")
    const Greendata=useSelector(state=>state.stored.items)

    const filteredCategory=Greendata.filter(item=>item.category===category)
    const displayCategory=filteredCategory.slice(0,7)

  return (
   <>
   <div className='py-5'>
     <div className="text-center py-4 space-y-5">
        <h1 className="font-semibold">My collection</h1>
        <h3>Shop by categories</h3>
      </div>
      <div className='flex justify-center gap-4 mb-5'>
        <button onClick={()=>setCategory("vegetables")} className={`shadow shadow-black py-1.5 px-6 rounded-[5px] cursor-pointer font-semibold ${category==="vegetables"?"bg-green-950 text-secondary":"bg-secondary text-primary"}`}>Vegetables</button>
        <button onClick={()=>setCategory("juices")} className={`text-primary shadow shadow-black py-1.5 px-6 rounded-[5px] cursor-pointer font-semibold ${category==="juices"?"bg-green-950 text-secondary":"bg-secondary text-primary"}`}>juices</button>
        <button onClick={()=>setCategory("fruits")} className={` text-primary shadow shadow-black py-1.5 px-6 rounded-[5px] cursor-pointer font-semibold ${category==="fruits"?"bg-green-950 text-secondary":"bg-secondary text-primary"}`}>fruits</button>
      </div>
        {category==="vegetables"&&<div>
            <img src={shopcateimage} alt="" />
        </div>}
      <div className='mt-5'>
        <Productscarousel GreenProduct={displayCategory} openCartModal={openCartModal} expandProductModal={expandProductModal}  />
      </div>
   </div>
   </>
  )
}

export default ShopbycategoryComponent
