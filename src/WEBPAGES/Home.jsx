import React, { useState, useEffect } from "react";

import Herosection from "../COMPONENTS/Herosection";
import TrendingCategoryComponent from "../COMPONENTS/TrendingCategoryComponent";
import TrendingFeaturedProduct from "../COMPONENTS/TrendingFeaturedProduct";
import ShopbycategoryComponent from "../COMPONENTS/ShopbycategoryComponent";
import BestdealsComponent from "../COMPONENTS/BestdealsComponent";
import NewsSliderComponent from "../COMPONENTS/NewsSliderComponent";
import FoodbrandComponent from "../COMPONENTS/FoodbrandComponent";
import BestSellersComponent from "../COMPONENTS/BestSellersComponent";
import TestimonialComponent from "../COMPONENTS/TestimonialComponent";
import ShopbyCategory from "../COMPONENTS/ShopbyCategory";
import CartModal from "../COMPONENTS/CartModal";
import CartPage from "./CartPage";
import { useSelector } from "react-redux";

const Home = () => {
  const [cartModal, setCartModal] = useState(false);
  const cartinModal = useSelector((state) => state.stored.cart);
  const [cartId, setCartid] = useState(null);
  const [modalMode, setModalmode] = useState(null);

  // useEffect(() => {
  //   const alow=cartinModal.map(item=>item.id)
  //   const idofProduct=itemId=alow
  //   const cartitem = cartinModal.find(item=>item.id===idofProduct)
  //   setCartid(cartitem);
  // }, [cartinModal]);

  function openCartModal(item) {
    if (cartModal && cartId === item&&modalMode==="cart") {
      setCartModal(false);
      return;
    }
    setCartid(item);
    setModalmode("cart");
    setCartModal(true);
  }

    useEffect(() => {
    if (cartModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [cartModal]);


  // useEffect(() => {
  //   if (expandreduxer) {
  //     const expandreduxerData = expandreduxer.find((item) => item.id == itemID);
  //     setAddedtoExpand(expandreduxerData);
  //   }
  // }, [expandreduxer]);


  function expandProductModal(item) {
    if (cartModal && cartId===item ) {
      setCartModal(false);
    }
     setCartid(item);
    setModalmode("expand");
    setCartModal(true);
  }

  function closecartModal() {
    setCartModal(false);
  }

  return (
    <>
      <div className="md:mt-40 sm:mt-35 lg:mt-40">
        <div className="py-4 sm:px-5 md:px-5 lg:px-22 sm:mt-15 md:mt-5">
          <Herosection />
          <ShopbyCategory />
          <TrendingCategoryComponent
            openCartModal={openCartModal}
            expandProductModal={expandProductModal}
          />
          <TrendingFeaturedProduct
            openCartModal={openCartModal}
            expandProductModal={expandProductModal}
          />
        </div>
        <div className="py-4 sm:px-5 md:px-5 mt-10 lg:px-22 bg-[#F7F7F7]">
          <ShopbycategoryComponent
            openCartModal={openCartModal}
            expandProductModal={expandProductModal}
          />
          <BestdealsComponent />
          <TestimonialComponent />
          <BestSellersComponent
            openCartModal={openCartModal}
            expandProductModal={expandProductModal}
          />
        </div>
        <FoodbrandComponent />
        <div className="py-4 sm:px-5 md:px-5 lg:px-22 sm:mt-15 md:mt-5">
          <NewsSliderComponent />
        </div>
      </div>
      {cartModal&&
        <CartModal
          closeTheModal={closecartModal}
          itemID={cartId}
          mode={modalMode}
        />
        }
    </>
  );
};

export default Home;
