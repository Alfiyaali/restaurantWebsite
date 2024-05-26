import React, { useState } from "react";

const PriceList = ({ items = [], onAddToCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (name, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: quantity,
    }));
  };

  const handleAddToCartClick = (item) => {
    const quantity = quantities[item.name] || 1; // Default to 1 if not set
    onAddToCart(item, quantity);
  };

  return (
    <div className="bg-[#373737] py-8">
      <div className="bg-white w-[90%] sm:w-[75%] md:w-[50%] rounded-lg mx-auto py-2 shadow-md">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              className={`border-b-2 border-gray-100 py-2 mx-4 sm:mx-8 my-4 sm:my-8 ${
                index === items.length - 1 ? "border-b-0" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-lg sm:text-xl font-semibold">
                    {item.name}
                  </h1>
                  <p className="text-sm sm:text-base">{item.description}</p>
                  <span className="block text-sm sm:text-base font-bold">
                    ${item.price}
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 p-1 border border-gray-300 rounded mr-2"
                    onChange={(e) => handleQuantityChange(item.name, Number(e.target.value))}
                  />
                  <button
                    className="bg-[#771f08] text-white px-4 py-2 rounded-full hover:bg-[#5d1607] transition"
                    onClick={() => handleAddToCartClick(item)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white">No items available</p>
        )}
      </div>
    </div>
  );
};

export default PriceList;
