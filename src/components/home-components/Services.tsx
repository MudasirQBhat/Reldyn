import React from "react";
import ServiceItems from "./ServiceItems";

const Services = () => {
  return (
    <div
      data-aos="fade-right"
      className="bg-gradient-to-t from-color-white via-color-gray to-color-white w-full py-6 sm:py-14 px-2.5"
    >
      <h1 className="text-center text-color-black font-roboto font-extrabold text-2xl sm:text-3xl">
        What do we offer?
      </h1>
      <p className="text-center font-inter text-lg sm:text-xl text-secondary-color">
        Strategic Solutions for Digital Advancement
      </p>
      <ServiceItems />
    </div>
  );
};

export default Services;
