import React, { useState } from 'react';

const PriceList = ({ items = [], onAddToCart }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemName, quantity) => {
    setQuantities({
      ...quantities,
      [itemName]: quantity,
    });
  };

  const handleAddButtonClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='bg-[#373737] py-8'>
      <div className='bg-white w-[90%] sm:w-[75%] md:w-[50%] rounded-lg mx-auto py-2 shadow-md'>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              className={`border-b-2 border-gray-100 py-2 mx-4 sm:mx-8 my-4 sm:my-8 ${index === items.length - 1 ? 'border-b-0' : ''}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h1 className='text-lg sm:text-xl font-semibold'>{item.name}</h1>
                  <p className='text-sm sm:text-base'>{item.description}</p>
                  <span className='block text-sm sm:text-base font-bold'>${item.price}</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={1}
                    onChange={() => handleQuantityChange(item.name, 1)}
                    className='w-16 p-1 border border-gray-300 rounded mr-2'
                  />
                  <button
                    className='bg-[#771f08] text-white px-4 py-2 rounded-full hover:bg-[#5d1607] transition mr-2'
                    onClick={() => handleAddButtonClick(item)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-white'>No items available</p>
        )}
      </div>
      {/* Modal Card */}
      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
            <p className="text-sm mb-2">{selectedItem.description}</p>
            <p className="text-lg font-bold">${selectedItem.price}</p>
            <button
              className="text-[#771f08] bg-white border border-[#771f08] px-6 mx-2 py-2 rounded-full mt-4"
            >
              Close
            </button>
            <button
              className="bg-[#771f08] text-white px-6 py-2 rounded-full mt-4"
            >
              Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceList;
