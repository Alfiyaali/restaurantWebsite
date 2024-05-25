import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#771f08] w-full h-16 flex justify-between">
        <div className="my-4 ml-20">
          <h1 className="text-white font-bold text-2xl">ReactMeals</h1>
        </div>
        <div className="bg-[#411200] flex items-center text-white justify-between px-4 w-48 mr-20 rounded-full my-4">
          <FaShoppingCart />
          <p>
            Your Cart <span className="bg-[#771f08] mx-2 px-4 rounded-full">0</span>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
