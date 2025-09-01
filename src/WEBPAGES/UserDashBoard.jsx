import React from "react";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";

const SimpleUserDashboard = () => {
  return (
    <>
      <div>
        <div className="pageMargin grid md:grid-cols-1 lg:grid-cols-5 sm:px-3 lg:px-15 gap-4">
          <div className=" sm:order-2 lg:order-1 w-full">
            <SideFilterComponent />
          </div>
          <div className=" md:col-span-4 sm:order-1 lg:order-2 space-y-3 p-3">
            <div className="p-10 max-w-3xl mx-auto border border-gray-500 rounded-[0.7rem]">
              {/* Welcome */}
              <h1 className="text-2xl font-bold mb-4">Welcome, owuama chukwuweikem martins</h1>
              <p className="text-gray-600 mb-6">
                Here is your dashboard overview.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-green-100 rounded-lg text-center">
                  <h2 className="text-xl font-bold">3</h2>
                  <p className="text-sm">Orders</p>
                </div>
                <div className="p-4 bg-orange-100 rounded-lg text-center">
                  <h2 className="text-xl font-bold">1</h2>
                  <p className="text-sm">On Delivery</p>
                </div>
                <div className="p-4 bg-blue-100 rounded-lg text-center">
                  <h2 className="text-xl font-bold">5</h2>
                  <p className="text-sm">Wishlist</p>
                </div>
                <div className="p-4 bg-pink-100 rounded-lg text-center">
                  <h2 className="text-xl font-bold">₦12,500</h2>
                  <p className="text-sm">Spent</p>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white shadow rounded-lg p-4">
                <h2 className="font-semibold text-lg mb-3">Recent Orders</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b pb-2">
                    <span>Fresh Orange Juice (2L)</span>
                    <span className="text-green-600 text-sm">Delivered</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span>Tomatoes Basket (5kg)</span>
                    <span className="text-blue-600 text-sm">On the way</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pineapple Smoothie</span>
                    <span className="text-yellow-600 text-sm">Processing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleUserDashboard;
