import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setfruitData } from ".";


const FruitandvegData = () => {
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);
  const fruitJson = "deepseek_json_20250730_0f8e27.json";
  const fruitDispatch = useDispatch();
   const fruits=useSelector(state=>state.stored.items)
   const trending=useSelector(state=>state.stored.trendingItems)


  useEffect(() => {
    async function fetchFruitApi() {
      try {
        setLoading(true)
        const response = await fetch(fruitJson);
        if (response.ok) {
          const data = await response.json();
          fruitDispatch(setfruitData(data.products));
          setLoading(false)
        }
      } catch (error) {
        seterror(error)
      }
    }
    fetchFruitApi();
  }, [fruitDispatch]);

    if(loading){
        return <div>Loading</div>
    }

    if(error){
        return <div>there is an error in your code</div>
    }
};

export default FruitandvegData;
