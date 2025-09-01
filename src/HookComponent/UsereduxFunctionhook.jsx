import React from "react";
import {
  setfruitData,
  searchedReducer,
  setfruitcaetgory,
  setSearchResults,
  setAddtocart,
  setIncreaseCart,
  setReMoveCart,
  setaddTowishList,
  setcompare,
  setAddtoexpand,
  setviewedProduct,
} from "../ReduxFolder";

import { useDispatch } from "react-redux";

const UsereduxFunctionhook = () => {
  const dispatch = useDispatch();

  const addToCart = (item) => dispatch(setAddtocart({ item }));
  const increaseProduct = (item) => dispatch(setIncreaseCart({ item }));
  const reduceProduct = (item) => dispatch(setReMoveCart({ item }));
  const wishList=(item)=>dispatch(setaddTowishList({item}))
  const Compare=(item)=>dispatch(setcompare({item}))
  const expandProduct=(item)=>dispatch(setAddtoexpand({item}))
  const viewedProduct=(item)=>dispatch(setviewedProduct({item}))

  return { addToCart, increaseProduct, reduceProduct,wishList,Compare,expandProduct,viewedProduct};
};

export default UsereduxFunctionhook;
