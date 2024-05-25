import React from "react";
import Navbar from "../Navbar/Navbar";
import background from "../../assets/hero-section-image.png";

const HeroSection = () => {
  return (
    <div>
      <Navbar />
      <div class="static">
        <p><img src={background} alt="" className="w-full h-96" /></p>
        <div class="absolute bottom-24 left-[30%] bg-[#313131] w-[50%] py-8 px-4">
          <h1 className="text-center text-white text-3xl font-bold py-4">Delicious food, delivered to you</h1>
          <p className="text-white text-center py-4 px-4">Welcome to ReactMeals! Indulge in a culinary experience like no other, where fresh ingredients meet expert chefs. Enjoy our diverse menu, from gourmet dishes to comforting classics, all crafted with love. Visit us today and savor the flavors that make every meal unforgettable. Your table awaits at ReactMeals!</p>
        </div>
      </div>
      {/* <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="bg-[#313131] w-[50%] position-relative mx-auto border-2 border-black h-[50%]"></div>
      </div> */}
    </div>
  );
};

export default HeroSection;
