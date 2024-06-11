import React from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import Slider from "./Slider ";
import Hero from "./Hero";
import HomePage from "./HomePage";

const Main = () => {
  return (
    <>
      <div className="bg-gray-200 ">
        <Navbar />
        <Categories />
        <Slider />
        <Hero />
        <HomePage />
      </div>
    </>
  );
};

export default Main;