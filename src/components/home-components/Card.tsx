import React from "react";

interface CardProps {
  id: number;
  serviceTitle: string;
  serviceDescription: string;
  serviceIcon: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div
      data-aos="slide-up"
      className="card p-8 my-4 h-96 w-full rounded bg-color-white relative overflow-hidden flex flex-col"
    >
      <div className="">
        <h1 className="font-roboto font-bold text-3xl md:text-5xl font-600 text-color-blackblue p-2 pb-0 ">
          {props.serviceTitle}
        </h1>
        <p className="font-inter text-lg text-color-black p-2 pt-1 flex-grow">
          {props.serviceDescription}
        </p>
      </div>
      <div className="absolute bottom-4 md:bottom-10 w-full flex justify-between items-center">
        <div className="p-4">
          <button className="py-2 px-6 rounded-full border-2 border-primary-color text-primary-color font-inter text-base font-600">
            Know More
          </button>
        </div>
        <div className="pl-4">
          <img
            src={props.serviceIcon}
            className="h-32 w-32 absolute right-6"
            alt="Service Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
