import React, { useEffect, useRef, useState } from 'react'
import { navData } from '../assets/Data'
import { Link } from 'react-router-dom'
import Clickouthook from '../HookComponent/Clickouthook'
import { useSelector } from 'react-redux'

const Sidenavbar = ({sidebarOpen, sidebarClose}) => {
    const[sidenavdrop,setsidenavdrop]=useState([])
    const[cancelsidenav,setCancelsidenav]=useState(null)
     const clickremover=useRef(null)
    const compare=useSelector(state=>state.stored.compare)
    const wishlist=useSelector(state=>state.stored.wishList)

    function handlesidenav(idindex){
        setsidenavdrop((prev)=>({[idindex]:!prev[idindex]}))
    }
    
    Clickouthook(clickremover,sidebarClose)

  return (
  <div className='z-40 backdrop-brightness-50 -md bg-bgroundcolor/90 fixed w-full h-full back'>   
     <nav className='slidein  z-50 absolute  bg-secondary  top-0 sm:w-1/2 lg:w-90 h-dvh  shadow-md' ref={clickremover} >
     <div className='flex justify-between items-center py-4 px-2 bg-primary text-secondary'>
        <h3 className='text-secondary'>MENU</h3>
        <span onClick={sidebarClose}><i class="fa-solid fa-xmark text-2xl cursor-pointer"></i> </span>
     </div>
     <div className='flex flex-col gap-1 [&] mt-3.5 pr-2'>
        {
            navData&&navData.map(item=>(
                <div className=' relative text-texted p-3 font-semibold'>
                    {
                        item.children? <p className='border-b-2 border-gray-300 hover:bg-gray-100 ' onClick={()=>handlesidenav(item.id)}>{item.title}</p> : <Link to={item.path} onClick={sidebarClose} className='border-b-2 border-gray-300 hover:bg-gray-100 '><p>{item.title}</p></Link>
                    }

                    {
                     <div className={`overflow-hidden transition-all duration-500 ease-in-out ${sidenavdrop[item.id]? "max-h-96" : "max-h-0"}`}>
                        {
                            sidenavdrop[item.id]? item.children.map((item)=>(
                               <Link to={item.path} onClick={sidebarClose} className=' hover:text-primary cursor-pointer'>
                                <div>
                                {item.title}
                                </div>
                               </Link>
                            )):null
                        }
                     </div>
                    }
                </div>
            ))
        }
     </div>
     <div className='flex bg-gray-100 justify-around mt-15 [&>div]:p-2 font-semibold items-center'>
        <Link to={"/Wishlist"} onClick={sidebarClose}><p className='relative'>whishList {wishlist.length>=1?<span className='addeditemIndicator -right-6'>{wishlist.length}</span>:null}</p></Link>
        <Link to={"/Compare" } onClick={sidebarClose}><p className='relative'>Comparison {compare.length>=1?<span className='addeditemIndicator -right-6'>{compare.length}</span>:null}</p></Link>
     </div>
   </nav>
  </div>
  )
}

export default Sidenavbar      