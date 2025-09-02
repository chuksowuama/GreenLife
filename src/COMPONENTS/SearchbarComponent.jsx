import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import {
  searchedReducer,
  selectFilteredItems,
  setSearchResults,
} from "../ReduxFolder";

const SearchbarComponent = () => {
  const mobile = useMediaQuery({ query: "(min-width:275px)" });
  const tablet = useMediaQuery({ query: "(min-width:635px)" });
  const laptop = useMediaQuery({ query: "(min-width:1200px)" });
  const greendata = useSelector((state) => state.stored.items);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();


  //function to handle input change
  function handlechangevalue(e) {
    const targ = e.target.value;
    setSearchValue(targ);
  }

  function handlesearchtrigger() {
    if (searchValue.trim().length > 0) {
       const triggeredSearch= greendata.filter(items=>items.name.toLowerCase().includes(searchValue.toLowerCase()));
         
       if(triggeredSearch.length>0){
        navigate("/Searched", { state: { searchResults:triggeredSearch } });
       }else{
        navigate("/Searched", { state: { searchResults:[] } });
       }
    }
      setSearchValue("");
  }

  return (
    <div
      className={
        laptop
          ? "w-full"
          : mobile && "py-3 bg-primary w-[100%] absolute top-[100.2%]  left-0"
      }
    >
      <div className="bg-[#F7F7F7]  p-2 md:w-full md:h-13 rounded-3xl rounded- m-auto overflow-hidden flex items-center gap-3.5 relative ">
        <input
          type="text"
          placeholder="Search Products Here.."
          className="md:w-full outline-0 pl-2.5  sm:w-[85%] "
          value={searchValue}
          onChange={handlechangevalue}
        />
        <span
          className=" w-[90px] p-9 absolute -right-1 lg:bg-primary sm:bg-secondary cursor-pointer lg:text-secondary"
          onClick={handlesearchtrigger}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchbarComponent;
