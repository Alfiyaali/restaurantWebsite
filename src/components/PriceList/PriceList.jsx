import React, { useState } from "react";
import CardModal from "../CardModal/CardModal";

const PriceList = ({ items = [], onAddToCart }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCartClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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
      <CardModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </div>
  );
};

export default PriceList;
