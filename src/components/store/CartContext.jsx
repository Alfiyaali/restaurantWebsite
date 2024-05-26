import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    // Implement your logic to add items to the cart
    // This function will be accessible to all components through the context
  };

  const removeFromCart = (itemName) => {
    // Implement your logic to remove items from the cart
    // This function will be accessible to all components through the context
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
