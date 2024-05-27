// HeroSection.jsx
import React from 'react';
import background from "../../assets/hero-section-image.png";

const HeroSection = () => {
  return (
    <div className="">
      <img
        src={background}
        alt="Hero"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default HeroSection;
