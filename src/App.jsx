import React from 'react';
import PriceList from './components/PriceList/PriceList';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="border-4 border-red-500">
      <Navbar />
        <div><HeroSection /></div>
        <PriceList />
     
    </div>
  );
}

export default App;