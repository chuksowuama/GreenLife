import React from "react";
import { storesData } from "../assets/Data";
import SideFilterComponent from "../COMPONENTS/SideFilterComponent";

const StoresPage = () => {
  return (
    <>
      <div className="pageMargin grid md:grid-cols-1 lg:grid-cols-5 sm:px-3 lg:px-15 gap-4">
        <div className=" sm:order-2 lg:order-1 w-full">
          <SideFilterComponent />
        </div>
        <div className=" md:col-span-4 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:order-1 lg:order-2">
          {storesData.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{store.name}</h2>
                <p className="text-sm text-gray-600">{store.location}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {store.openingHours}
                </p>
                <p className="text-gray-700 text-sm">{store.description}</p>
                <p className="mt-2 font-semibold text-green-600">
                  📞 {store.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoresPage;
