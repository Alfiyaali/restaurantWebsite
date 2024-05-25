import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';

const App = () => {
  const menuItems = [
    { name: 'Sushi', description: 'Finest Fish and veggies', price: '22.99' },
    { name: 'Schezwan', description: 'Chinese cuisine', price: '16.50' },
    { name: 'Barbeque Burger', description: 'American, raw, meaty', price: '12.99' },
    { name: 'Green Bowl', description: 'Healthy and green', price: '2.99' },
  ];

  return (
    <div>
      <HeroSection menuItems={menuItems} />
    </div>
  );
};

export default App;
