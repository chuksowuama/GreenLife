import React from 'react'

const Pagination = ({currentPage,totalPage,onChangePage}) => {
    const pages=Array.from({length:totalPage},(_,index)=>index+1)

  return (
    <div>
      <ul className='flex gap-3'>
        {
            pages.length<2?"": pages.map(page=>(
                <li onClick={()=>onChangePage(page)} className={currentPage===page?"w-8 h-8 flex items-center justify-center bg-gray-800 rounded cursor-pointer text-secondary":"w-8 h-8 flex items-center justify-center bg-gray-700 rounded text-secondary cursor-pointer"}>
                    {page}
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Pagination
