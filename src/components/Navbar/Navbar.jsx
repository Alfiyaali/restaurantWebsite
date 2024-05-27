// Navbar.jsx
import React from 'react';
import CartButton from '../CartButton/CartButton';

const Navbar = () => {
  return (
    <nav className="bg-[#771f08] h-16 flex justify-between items-center">
      <div className="ml-8">
        <h1 className="text-white font-bold text-2xl">ReactMeals</h1>
      </div>
      <CartButton />
    </nav>
  );
};

export default Navbar;
