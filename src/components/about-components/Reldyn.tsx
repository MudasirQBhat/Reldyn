import whatIsReldynImage from "../../assets/WhatisReldynImage.png";

const Reldyn = () => {
  return (
    <div className="w-full px-6 lg:px-20 my-20 relative" data-aos="fade-right">
      <div className="lg:flex">
        <div className="lg:w-1/2 lg:h-96">
          <img
            src={whatIsReldynImage}
            alt="Reldyn Image"
            className="h-full w-full lg:rounded-tl-3xl lg:rounded-bl-3xl rounded-t-3xl lg:rounded-tr-none object-cover"
          />
        </div>
        <div className="rounded-bl-3xl rounded-br-3xl lg:w-1/2 lg:h-96  lg:rounded-tr-3xl lg:rounded-bl-none lg:rounded-br-3xl bg-gradient-to-r from-color-dark-silver to-[#DADADA] p-4 lg:p-8">
          <h1 className="font-roboto text-lg lg:text-2xl xl:text-3xl font-black text-color-blackblue">
            What is RELDYN?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Reldyn;
