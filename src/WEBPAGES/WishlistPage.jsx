import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Authentication from "./Authentication";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";
import ProductsCard from "../COMPONENTS/ProductsCard";

const WishlistPage = () => {
  const [authentication, setAuthentication] = useState(false);
  const wishlist = useSelector((state) => state.stored.wishList);
  const user = useSelector((state) => state.stored.ActiveUser);
  console.log(wishlist);

  return (
    <>
      <div>
        {user ? (
          <div>
            <div className="pageMargin grid md:grid-cols-1 lg:grid-cols-5 sm:px-3 lg:px-15 gap-4">
              <div className=" sm:order-2 lg:order-1 w-full">
                <SideFilterComponent />
              </div>
              <div className=" md:col-span-4 sm:order-1 lg:order-2 space-y-3 p-3">
                <h3>Your WishList</h3>
                <hr className="hr" />
                {wishlist.length > 0 ? (
                  <div className="flex">
                    {wishlist.map((item) => (
                      <ProductsCard item={item} />
                    ))}
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col gap-3 h-full p-6">
                      <h2 className="text-gray-600 text-[1.6rem]">
                        vegan wishlist
                      </h2>
                      <p className="border-2 py-3 px-3 border-red-600 bg-red-300 text-gray-600 font-bold">
                        there are no Products on your wish list
                      </p>
                    </div>
                  </div>
                )}
                 <Link to={"/"}>
                      <button className="bg-primary px-7 py-3 cursor-pointer text-secondary font-semibold rounded-2xl">
                        Continue shopping
                      </button>
                    </Link>
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
