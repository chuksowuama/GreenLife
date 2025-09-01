import React, { useEffect, useState } from "react";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import UsereduxFunctionhook from "../HookComponent/UsereduxFunctionhook";
import paylogo1 from "../assets/payment_icons (1).png";
import Productscarousel from "../COMPONENTS/Productscarousel";
import productBanner from "../assets/product-banner-02.jpg"
import Moreinfotag from "../COMPONENTS/Moreinfotag";

const DetailsPage = () => {
  const { idparam } = useParams();
  const [curentAdded, setCurrentAdded] = useState();
  const greenlife = useSelector((state) => state.stored.items);
  const { addToCart, wishList, Compare } = UsereduxFunctionhook();
  const [expandImg, setexpandImg] = useState(null);
  const [related, setrelated] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const viewedProducts = useSelector((state) => state.stored.viewed);

useEffect(()=>{
  console.log(viewedProducts)
},[viewedProducts])
  


  useEffect(() => {
    const foundItem = greenlife.find((item) => item.id === Number(idparam));
    setCurrentAdded(foundItem);
  }, [greenlife, idparam, curentAdded]);

  // filter 16 related products by category
  useEffect(() => {
    const relatedcategory = greenlife
      .filter((item) => item.category === curentAdded?.category)
      .slice(0, 16);
    setrelated(relatedcategory);
  }, [greenlife, curentAdded, idparam]);

  //  products you might also like
  useEffect(() => {
    if (greenlife.length >= 5) {
      const randomProduct = [...greenlife].sort(() => 0.5 - Math.random());
      const recomendedproduct = randomProduct.slice(0, 5);
      setRecommended(recomendedproduct);
    }
  }, []);

  return (
    <div className="pageMargin">
        {
          curentAdded&&(
            <div className="grid md:grid-cols-1 lg:grid-cols-3 sm:px-3 lg:px-15 gap-4">
              <div className=" flex flex-col gap-10">
                <div className="w-full h-90 border-gray-400 border gap-3 p-3">
                  <img
                    src={expandImg || curentAdded?.images?.[0]}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex gap-3 sm:justify-center ">
                  {curentAdded?.images?.map((item) => (
                    <div className="w-20 h-20 border border-gray-400">
                      <img
                        src={item}
                        alt=""
                        className="w-full h-full cursor-pointer"
                        onClick={() => setexpandImg(item)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 md:border-l-2 md:border-gray-300 flex flex-col justify-around space-y-2 md:px-3 ">
                <h3 className="text-texted">{curentAdded.name}</h3>
                <p className="text-quintanary font-semibold">
                  {curentAdded.rating}
                </p>
                <p className="text-[1.3rem] font-bold">{curentAdded.price}</p>
                <p className="text-gray-600">Delivered within 2-3 days</p>
                <p className="text-gray-700">
                  {curentAdded.description.slice(0, 500)}
                </p>
                <hr className="text-gray-400 sm:hidden md:block md:w-5/6" />
                <div className="flex flex-wrap flex-col gap-5">
                  <button
                    className="button2 sm:w-full md:w-40"
                    onClick={() => addToCart(curentAdded)}
                  >
                    add to cart
                  </button>
                  <div className="flex  gap-5 text-[0.9rem] text-texted font-semibold [&>span]:hover:text-gray-400 [&>span]:cursor-pointer sm:flex-wrap ">
                    <span onClick={() => wishList(curentAdded)}>
                      <i class="fa-solid fa-heart"></i>add to wishList
                    </span>
                    <span onClick={() => Compare(curentAdded)}>
                      <i class="fa-solid fa-arrows-rotate"></i>add to compare
                    </span>
                  </div>
                  <hr className="hr sm:hidden md:block md:w-5/6" />
                  {/* lowerPart of the right side  */}
                  <div className="flex flex-col gap-4">
                    {/* iconsLinks */}
                    <div className="flex items-center sm:justify-center md:justify-start">
                      <span className="socialButtons bg-[#1877f2]">
                        <i class="fa-brands fa-facebook text-[1rem] hover:text-gray-500 "></i>{" "}
                        share
                      </span>
                      <span className="socialButtons bg-[#1da1f2]">
                        <i class="fa-brands fa-x-twitter text-[1rem] hover:text-gray-500 "></i>{" "}
                        Tweet
                      </span>
                      <span className="socialButtons  bg-[#bd081c]">
                        <i class="fa-brands fa-pinterest text-[1rem] hover:text-gray-500 "></i>{" "}
                        pinterest
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 sm:w-full lg:w-5/6 border-4  border-dotted border-gray-500 sm:px-2 md:px-5 py-3">
                      <span className="flex gap-5">
                        <i className="fas fa-lock text-gray-500 mt-1"></i>
                        <p className="text-gray-500 font-light">
                          security policy <br />
                          (edit with the Customer Reassurance module)
                        </p>{" "}
                      </span>
                      <span className="flex gap-5">
                        <i className="fas fa-truck text-gray-500 mt-1"></i>
                        <p className="text-gray-500 font-light">
                          Delivery policy
                          <br />
                          (edit with the Customer Reassurance module)
                        </p>{" "}
                      </span>
                      <span className="flex gap-5">
                        <i className="fas fa-thumbs-up text-gray-500 mt-1"></i>
                        <p className="text-gray-500 font-light">
                          Return policy <br />
                          (edit with the Customer Reassurance module)
                        </p>{" "}
                      </span>
                    </div>
                    <div className="flex items-center flex-col gap-2 py-2.5 bg-gray-100 rounded-2xl">
                      <h3 className="text-gray-500 text-[1rem] md:text-[1.5rem]">
                        Guarantee safe checkout
                      </h3>
                      <span className="flex justify-center gap-1.5">
                        <img src={paylogo1} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }

      {/* this is the lower half of the details page */}
      <div className="flex flex-col gap-4 my-5 md:px-14 py-3">
        <div className="sm:px-5">
            <Moreinfotag/>
        </div>

         <img src={productBanner} alt="" />

         <div className="flex flex-col gap-3 sm:px-5 [&>p]:text-gray-600 [&>h3]:text-texted text-2xl">
          <h3>About this item</h3>
          <p>Hybrid Active Noise Cancelling Headphones with Transparent Modes, 65H Playtime Wireless Over-Ear Bluetooth Headphones with Mic Deep Bass,Multi-Connection,Soft-Earpads for PC TV</p>
          <p>Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.</p>
          <p>Amped-up streaming apps — Access the Bose Music app’s integrated music services and internet radio stations over Wi-Fi. Or connect to your phone with Bluetooth, Apple AirPlay 2, Spotify Connect, or Chromecast built-in. A remote control can allow operation of devices that are out of convenient reach for direct operation of controls. They function best when used from a short distance. This is primarily a convenience feature for the user. In some cases, remote controls allow a person to operate a device that they otherwise would not be able to reach, as when a garage door opener is triggered from outside.</p>
         </div>
        {/* Recommended product in a slider */}
        <div className="py-2 flex flex-col md:gap-20">
          <div>
            <h2 className="text-center text-texted text-2xl mb-3">Product you might like</h2>
            <Productscarousel GreenProduct={recommended} />
          </div>
          <div>
            <h2 className="text-center text-texted text-2xl mb-3">
              16 other products in the same category:
            </h2>
            <Productscarousel GreenProduct={related} />
          </div>
            {
              viewedProducts.length===5?<div>
                <h2 className="text-center text-texted mb-3">
              Viewed Product
            </h2>
            <Productscarousel GreenProduct={viewedProducts} /></div>:null
            }
        </div>
        {/* 16 other products in the same category slider */}
      </div>
    </div>
  );
};

export default DetailsPage;
