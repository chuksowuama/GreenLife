import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UsereduxFunctionhook from "../HookComponent/UsereduxFunctionhook";
import { Link } from "react-router-dom";

const ProductsCard = ({ item, openCartModal, expandProductModal }) => {
  const cartResult = useSelector((state) => state.stored.cart);
  const compare = useSelector((state) => state.stored.compare);
  const wishlist = useSelector((state) => state.stored.wishList);
  const [cartId, setCartid] = useState(null);
  const [clickedCompare, setClickedCompare] = useState(null);
  const [liked, setLiked] = useState(null);
  const { wishList, Compare, expandProduct, addToCart,viewedProduct } =
    UsereduxFunctionhook();

  useEffect(() => {
    const cartitem = cartResult.find((cartitems) => cartitems.id === item.id);
    setCartid(cartitem);
  }, [cartResult, item]);

  useEffect(() => {
    const compareditem = compare.find((comp) => comp.id === item.id);
    const liked = wishlist.find((love) => love.id === item.id);
    setClickedCompare(compareditem);
    setLiked(liked);
  }, [compare, item, wishlist]);

  return (
    <>
      <div className="group px-3 shadow-lg h-full my-2 [&>button]:hover:bg-primary cursor-pointer">
        <div className=" bg-gray-200 w-full sm:h-96 md:h-72 relative overflow-hidden">
          <Link to={`/details/${item.id}`} onClick={() => viewedProduct(item)}>
            <img
              src={item.images?.[0]}
              alt=""
              className="w-full h-full sm:object-fit group-hover:brightness-50 transition-all duration-300 ease-in-out"
            />
          </Link>
          <div className="absolute w-full py-2 px-4 top-0 left-0 flex justify-between">
            <p className="text-[13px]  py-0.5 px-1.5 bg-quintanary text-center text-secondary rounded-tl-2xl rounded-br-2xl">
              New
            </p>
            <span className="absolute -right-20 group-hover:right-4 opacity-0 group-hover:opacity-100 top-20 gap-5 flex flex-col transition-all duration-300 ease-in-out">
              <i
                class="fa-solid fa-maximize text-[19px] cursor-pointer text-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  expandProduct(item);
                  expandProductModal(item.id);
                }}
              ></i>
              <i
                class={`fa-solid fa-arrows-rotate text-[19px] cursor-pointer ${
                  clickedCompare ? "text-primary" : "text-secondary"
                }`}
                onClick={() => {
                  Compare(item), () => setClickedCompare(item.id);
                }}
              ></i>
              <i
                class={`fa-solid fa-heart text-[19px] cursor-pointer ${
                  liked ? "text-red-500" : "text-secondary"
                }`}
                onClick={() => {
                  wishList(item), () => setLiked(item.id);
                }}
              ></i>
            </span>
          </div>
        </div>
        <div className="p-2 space-y-1 h-[200px]">
          <p className="font-light text-gray-500">{item.category}</p>
          <Link to={`/details/${item.id}`} onClick={() => viewedProduct(item)}>
            <p className="font-extrabold text-[0.9rem] text-texted truncate">
              {item.name}
            </p>
          </Link>
          <p className="text-quintanary font-extrabold">{item.rating}</p>
          <p className="text-[17px] font-bold">NGN{item.price}</p>
          <button
            className="cardButton"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
              openCartModal(item.id);
            }}
          >
            {!cartId ? "Add To Cart" : "Remove from Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
