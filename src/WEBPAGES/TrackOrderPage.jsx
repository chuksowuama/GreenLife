import React, { useState } from "react";
import { ordersData } from "../assets/Data";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";

const TrackOrderPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [order, setOrder] = useState(null);

  const handleSearch = () => {
    const foundOrder = ordersData.find(
      (o) => o.orderId === searchInput || o.phone === searchInput
    );
    setOrder(foundOrder || null);
  };

  return (
    <>
      <div>
        <div className="pageMargin grid md:grid-cols-1 lg:grid-cols-5 sm:px-3 lg:px-15 gap-4">
          <div className=" sm:order-2 lg:order-1 w-full">
            <SideFilterComponent />
          </div>
          <div className=" md:col-span-4 sm:order-1 lg:order-2 space-y-3 p-3">
            <div className="p-6 max-w-2xl mx-auto mt-60 shadow-2xl">
              <h1 className="text-2xl font-bold mb-4 text-center">
                Track Your Order
              </h1>
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Enter Order ID or Phone Number"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="flex-1 border p-2 rounded-lg"
                />
                <button
                  onClick={handleSearch}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Search
                </button>
              </div>

              {order ? (
                <div className="bg-white rounded-2xl shadow-lg p-4">
                  <h2 className="text-xl font-bold">{order.customerName}</h2>
                  <p className="text-gray-600">📍 {order.location}</p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-semibold">Order ID:</span>{" "}
                    {order.orderId}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Items:</span>{" "}
                    {order.items.join(", ")}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Status:</span>{" "}
                    <span className="text-green-600">{order.status}</span>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Estimated Time:</span>{" "}
                    {order.estimatedTime}
                  </p>
                </div>
              ) : (
                searchInput && (
                  <p className="text-red-600 text-center font-semibold">
                    ❌ No order found. Please check your details.
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrderPage;
