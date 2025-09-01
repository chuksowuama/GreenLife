import React from 'react'
import { Link } from 'react-router-dom'

const BannerComponent = ({bannerClass,bannerPath,bannerimg,bannerStamp, bannerHeader}) => {
  return (
   <>
    <div className={bannerClass||'overflow-hidden relative sm:h-[250px]  md:rounded-[5px]'}>
           <img src={bannerimg} alt="" className='sm:object-fit brightness-90 md:object-cover z-10 w-full h-full scale-100 hover:scale-110 transition-transform duration-500 ease-in-out' />
            <div className='absolute top-5 left-2 w-48 sm:space-y-2 md:space-y-2'>
               <h3 className='text-[0.9rem] bg-quintanary py-2 px-1 text-center text-secondary rounded-tl-2xl rounded-br-2xl w-35'>{bannerStamp}</h3>
               <h2 className='text-2xl'>{bannerHeader}</h2>
                <Link to={bannerPath}><h4 className='font-semibold underline'>shop now</h4></Link>
           </div>
       </div>
   </>
  )
}

export default BannerComponent
