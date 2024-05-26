import React, { useState } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import CartModal from './components/CardModal/CardModal';
import { CartProvider } from './components/store/CartContext';


const App = () => {
  const menuItems = [
    { name: 'Sushi', description: 'Finest Fish and veggies', price: '22.99' },
    { name: 'Schezwan', description: 'Chinese cuisine', price: '16.50' },
    { name: 'Barbeque Burger', description: 'American, raw, meaty', price: '12.99' },
    { name: 'Green Bowl', description: 'Healthy and green', price: '2.99' },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.name === item.name);
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
    console.log(`${quantity} x ${item.name} added to cart!`);
  };

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
    <div>
      <Navbar cartItemCount={cartItemCount} onCartClick={handleCartClick} />
      <HeroSection menuItems={menuItems} onAddToCart={handleAddToCart} />
      {isCartOpen && <CartModal cartItems={cart} onClose={handleCloseCart} />}
    </div>
    </CartProvider>
  );
};

export default App;
