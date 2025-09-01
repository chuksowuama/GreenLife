import React from 'react'
import SignInPage from './SignInPage'
import SideFilterComponent from '../COMPONENTS/SideFilterComponent'

const OtherPages = () => {
  return (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 sm:px-3 lg:px-15 gap-4">
          {curentAdded && (
            <div className="grid md:grid-cols-2 gap-3 p-3 sm:mt-20 md:mt-0 border border-green-500">
              {/* left side of detail page with the images */}
              <div className=" flex flex-col gap-10 border border-yellow-500">
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
              {/* right side of the modal */}
              <div className="col-span-1 md:border-l-2 md:border-gray-300 flex flex-col justify-around space-y-2 md:px-3  border border-yellow-5 ">
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
          )}
      </div>
  )
}

export default OtherPages
