import React, { useState } from "react";
import { accordionData } from "../assets/Data";

const FooterAccordion = () => {
  let [accordion, setaccordion] = useState(null);

  function handleopenAccordion(dataId) {
    setaccordion(dataId === accordion ? null : dataId);
  }
  return (
    <ul>
      {accordionData.map((item) => (
        <li
          onClick={() => handleopenAccordion(item.id)}
          className="text-[20px] font-semibold p-1 cursor-pointer ralative"
        >
         <div className=" flex justify-between">
        <span>{item.title}</span>
        <span className="text-gray-700 ">{accordion===item.id ? "▲" : "▼"}</span>
         </div>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${accordion === item.id ? "max-h-96" : "max-h-0"}`}>
             <div>
                {Array.isArray(item.content) ? (
                (
                    item.content.map((sub,index)=>(
                        <p>{typeof item.content[0]==="string"?sub:sub.platform}</p>
                    ))
                  )
                ) : (
                  <div className="[&>p]:text-gray-700 ">
                    <p>{item.content.storeName}</p>
                    <p>{item.content.address}</p>
                    <p>
                      {item.content.city}, {item.content.postalCode}
                    </p>
                    <p>{item.content.country}</p>
                    <p>{item.content.email}</p>
                    <p>{item.content.phone}</p>
                    <p>{item.content.supportText}</p>
                  </div>
                )}
              </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FooterAccordion;
