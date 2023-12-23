import React from "react";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButtons/NavigateButtons";
import ProductSection from "../ProductSection/ProductSection";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Slider />
      <NavigateButtons />
      <ProductSection />
    </div>
  );
};

export default Main;
