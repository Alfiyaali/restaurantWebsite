import React from "react";
import background from "../../assets/hero-section-image.png";
import PriceList from "../PriceList/PriceList";

const HeroSection = ({ menuItems, onAddToCart }) => {
  return (
    <div>
      <div className="relative">
        <img
          src={background}
          alt="Hero"
          className="w-full h-64 sm:h-96 object-cover"
        />
        <div className="absolute bottom-12 sm:bottom-0 sm:top-28 left-1/2 transform -translate-x-1/2 bg-[#313131] w-[90%] sm:w-[50%] py-4 sm:py-8 px-2 sm:px-4 rounded-lg">
          <h1 className="text-center text-white text-xl sm:text-3xl font-bold py-2 sm:py-4">
            Delicious food, delivered to you
          </h1>
          <p className="text-white text-center text-sm sm:text-base py-2 sm:py-4 px-2 sm:px-4">
            Welcome to ReactMeals! Indulge in a culinary experience like no
            other, where fresh ingredients meet expert chefs. Enjoy our diverse
            menu, from gourmet dishes to comforting classics, all crafted with
            love. Visit us today and savor the flavors that make every meal
            unforgettable. Your table awaits at ReactMeals!
          </p>
        </div>
      </div>
      <PriceList items={menuItems} onAddToCart={onAddToCart} />
    </div>
  );
};

export default HeroSection;
