import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../store/CartContext';


const Navbar = ({ cartItemCount, onCartClick }) => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div>
      <nav className="bg-[#771f08] w-full h-16 flex justify-between">
        <div className="my-4 ml-20">
          <h1 className="text-white font-bold text-2xl">ReactMeals</h1>
        </div>
        <button
          className="bg-[#411200] flex items-center text-white justify-between px-4 w-48 mr-20 rounded-full my-4"
          onClick={onCartClick}
        >
          <FaShoppingCart />
          <p>
            Your Cart <span className="bg-[#771f08] mx-2 px-4 rounded-full">{cartItemCount}</span>
          </p>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;