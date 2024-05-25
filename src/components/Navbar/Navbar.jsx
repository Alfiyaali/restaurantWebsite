import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#771f08] w-full h-16 flex justify-between items-center px-4 sm:px-8 md:px-20">
        <div className="my-4">
          <h1 className="text-white font-bold text-xl sm:text-2xl">ReactMeals</h1>
        </div>
        <div className="bg-[#411200] flex items-center text-white justify-between px-2 py-2 sm:px-4 w-auto sm:w-48 rounded-full my-4">
          <FaShoppingCart className="text-lg sm:text-xl" />
          <p className="text-sm sm:text-base">
            Your Cart <span className="bg-[#771f08] mx-2 px-2 sm:px-4 rounded-full">0</span>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
