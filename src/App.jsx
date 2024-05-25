import React, { useState } from 'react';
import HeroSection from './components/HeroSection/HeroSection';

const App = () => {
  const menuItems = [
    { name: 'Sushi', description: 'Finest Fish and veggies', price: '22.99' },
    { name: 'Schezwan', description: 'Chinese cuisine', price: '16.50' },
    { name: 'Barbeque Burger', description: 'American, raw, meaty', price: '12.99' },
    { name: 'Green Bowl', description: 'Healthy and green', price: '2.99' },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item, quantity) => {
    console.log(`${quantity} x ${item.name} added to cart!`);
    // Here you can add functionality to update the cart state
  };

  return (
    <div>
      <HeroSection menuItems={menuItems} onAddToCart={handleAddToCart} />
      {/* Optionally, you can display the cart items here */}
      <div>
        <h2>Cart Items:</h2>
        {cart.map((item, index) => (
          <p key={index}>{item.name} - ${item.price}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
