import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Clickouthook from "../HookComponent/Clickouthook";
import { Link } from "react-router-dom";

const CategoryComponent = () => {
  const fruits = useSelector((state) => state.stored.items);
  const [dropcategory, setdropcategory] = useState(false);
  const filteredCategories = [
    ...new Set(fruits.map((items) => items.subcategory)),
  ];
  

  const clickremover=useRef(null)
  Clickouthook(clickremover,()=>{
    setdropcategory(false)
  })

  function handlecategory() {
    setdropcategory(false);
  }

  return (
    <div className="relative  flex flex-col items-center px-3.5 py-1.5 rounded-[16px] bg-quintanary text-secondary shadow-md" ref={clickremover}>
      <div
        className=" flex items-center gap-3 font-semibold cursor-pointer w-full py-1 rounded-md transition capitalize"
        onClick={() => setdropcategory(!dropcategory)}
      >
       <i class="fa-solid fa-list"></i>
       <span >shop by category</span>
       <span className="text-[13px] mt-2">{dropcategory?"▲" : "▼"}</span>
      </div>
      <ul
        className={`z-30 absolute left-0 top-15 w-full bg-[#EAF1EE] shadow-lg overflow-hidden transition-all duration-300 ${
          dropcategory
            ? "max-h-60 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        {filteredCategories.map((item, index) => (
          <Link to={`products/${item}`}>
          <li
            onClick={() => handlecategory(item)}
            className="text-texted px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-primary border-b last:border-b-0 transition capitalize"
          >
            {item}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryComponent;
