import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Authentication from "./Authentication";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";
import ProductsCard from "../COMPONENTS/ProductsCard";

const WishlistPage = () => {
  const [authentication, setAuthentication] = useState(false);
  const wishlist = useSelector((state) => state.stored.wishList);
  const user=useSelector(state=>state.stored.ActiveUser)
  console.log(wishlist);

  return (
    <>
      <div>
        {user? (
          <div>
            <div className="pageMargin grid md:grid-cols-1 lg:grid-cols-5 sm:px-3 lg:px-15 gap-4">
              <div className=" sm:order-2 lg:order-1 w-full">
                <SideFilterComponent />
              </div>
              <div className=" md:col-span-4 sm:order-1 lg:order-2 space-y-3 p-3">
                <div className="border flex">
                  {
                    wishlist.map(item=>(
                      <ProductsCard item={item} />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Authentication />
          </div>
        )}
      </div>
    </>
    //
  );
};

export default WishlistPage;
