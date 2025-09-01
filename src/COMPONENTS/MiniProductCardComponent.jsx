import React from "react";

const MiniProductCardComponent = ({item}) => {
  return (
    <>
      <div className="flex gap-4 items-center ">
        <div className="w-15 h-15 bg-amber-600">
          <img src={item.images?.[0]} alt="" className="w-full h-full" />
        </div>
        <div>
          <p className="font-semibold text-texted text-[0.8rem]">{item.name}</p>
          <p className="font-bold">${item.price}</p>
        </div>
      </div>
    </>
  );
};

export default MiniProductCardComponent;
