import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductGridComponent from '../WEBPAGES/ProductGridComponent'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const FilterbysideComponent = ({closeFilterby}) => {
  const[priceIndex,setPriceIndex]=useState(0)
  const[priceList,setPriceList]=useState([])
  const[ratings,setRatings]=useState([])
  const[ratingIndex,setRatingIndex]=useState(0)
  const[isavailable,setIsavailable]=useState({available:true})
  const greenData=useSelector(state=>state.stored.items)
  const navigate=useNavigate()
  const laptop = useMediaQuery({ query: "(min-width:1200px)" });



  useEffect(()=>{
    if(greenData.length>0){
        const listOfprice=[...new Set(greenData.map(item=>item.price))].sort((a,b)=>a-b)
        setPriceList(listOfprice)
    }
    if(greenData.length>0){
      const listofRatings=[...new Set(greenData.map(item=>item.rating))].sort((a,b)=>a-b)
      setRatings(listofRatings)
    }
  },[greenData])


   // filter by Price range function
  function handleChangeRange(e){
    const newIndex=Number(e.target.value)
    setPriceIndex(Number(newIndex))

     if(priceList.length>0){
      const thePrice=greenData.filter(item=>item.price>=priceList[newIndex] && item.price<= priceList[priceList.length-1])
        navigate("/Searched",{ state: { searchResults:thePrice} })
     }
  }

  
  // filter by rating function
  function handleChangeRatings(e){
    const newIndex=Number(e.target.value)
    setRatingIndex(newIndex)
    const productRating=greenData.filter(item=>item.rating>=ratings[newIndex]&& item.rating<=5)
     navigate("/Searched",{ state: { searchResults:productRating} })
  }
  
  // filter by availability function
  function handleAvialbaleChange(e){
   const availabaleChange=JSON.parse(e.target.value)
   setIsavailable({available:availabaleChange})
   const availableproducts=greenData.filter(item=>item.available===availabaleChange)
   if(availableproducts.length>0){
     navigate("/Searched",{state:{searchResults:availableproducts}})
   }
  }

  console.log(isavailable.available)
 
  return (
    <>
     <div className='relative flex flex-col gap-3 mb-5 border border-gray-400 rounded-2xl sm:mt-15 md:mt-0 p-2 '>
      {!laptop&& <span onClick={closeFilterby} className='absolute  right-10 top-3 text-2xl cursor-pointer'><i class="fa-solid fa-xmark"></i> </span>}
      <h3>Filter By</h3>
       <hr className='mb-1.5 text-gray-400 p-0.5 w-full mx-auto' />
        {/* filter  by price */}
    <div className=' flex flex-col rounded-2xl p-3 gap-3'>
      <p>price</p>
      <div className='flex justify-between'>
        <span className='font-bold'>${priceList[priceIndex]}</span>
        <span className='font-bold'>${priceList[priceList.length-1]}</span>
      </div>
      <input type="range" name="" value={priceIndex} min={0} max={priceList.length-1}  id="" onChange={handleChangeRange}
      className=' w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary py-2 shadow-inner '
       />
    </div>

    {/* filter by Rating */}
        <div className=' flex flex-col  p-3 gap-3'>
      <p>Rating</p>
      <div className='flex justify-between'>
        <span className='font-bold'>{ratings[ratingIndex]} stars</span>
        <span className='font-bold'>{5}stars</span>
      </div>
      <input type="range" name="" value={ratingIndex} min={0} max={5}  id="" onChange={handleChangeRatings}
      className=' w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary py-2 shadow-inner '
       />
    </div>

     {/* filter by availability */}
    <div className='flex flex-col gap-2'>
      <p>Available</p>
    <select name="available" id=""
     onChange={handleAvialbaleChange}
     value={isavailable.available}
     className='border border-gray-400 rounded-2xl p-2 cursor-pointer'
     > 
     <option value="Available in stock">Available in stock</option>
      <option  value={true}>True</option>
      <option value={false}>false</option>
     </select>
    </div>
     </div>
    </>
  )
}

export default FilterbysideComponent
