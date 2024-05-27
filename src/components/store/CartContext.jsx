import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    // Update the cart reducer to manage quantity
    case "ADD_ITEM":
      // Check if the item already exists in the cart
      const existingIndex = state.cart.findIndex(
        (item) => item.id === action.item.id
      );
      if (existingIndex !== -1) {
        // If the item exists, increase its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += 1;
        return {
          cart: updatedCart,
          totalAmount: state.totalAmount + action.item.price,
        };
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        return {
          cart: [...state.cart, { ...action.item, quantity: 1 }],
          totalAmount: state.totalAmount + action.item.price,
        };
      }
    case "INCREMENT_QUANTITY":
      const IncrementupdatedCart = state.cart.map((item) => {
        if (item.id === action.itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return {
        cart: IncrementupdatedCart,
        totalAmount:
          state.totalAmount +
          state.cart.find((item) => item.id === action.itemId).price,
      };
    case "DECREMENT_QUANTITY":
      const DecrementupdatedCart = state.cart.map((item) => {
        if (item.id === action.itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return {
        cart: DecrementupdatedCart,
        totalAmount:
          state.totalAmount -
          state.cart.find((item) => item.id === action.itemId).price,
      };

    case "DELETE_ITEM":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.itemId
      );
      return {
        cart: updatedCart,
        totalAmount:
          state.totalAmount -
          state.cart.find((item) => item.id === action.itemId).price *
            state.cart.find((item) => item.id === action.itemId).quantity,
      };
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    totalAmount: 0,
  });

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
