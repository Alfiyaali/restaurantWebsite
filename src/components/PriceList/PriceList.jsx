import React from 'react';

const PriceList = ({ items = [] }) => {
  return (
    <div className='bg-[#373737] py-8'>
      <div className='bg-white w-[90%] sm:w-[75%] md:w-[50%] rounded-lg mx-auto py-2 shadow-md'>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              className={`border-b-2 border-gray-100 py-2 mx-4 sm:mx-8 my-4 sm:my-8 ${index === items.length - 1 ? 'border-b-0' : ''}`}
            >
              <h1 className='text-lg sm:text-xl font-semibold'>{item.name}</h1>
              <p className='text-sm sm:text-base'>{item.description}</p>
              <span className='block text-sm sm:text-base font-bold'>${item.price}</span>
            </div>
          ))
        ) : (
          <p className='text-center text-white'>No items available</p>
        )}
      </div>
    </div>
  );
};

export default PriceList;
