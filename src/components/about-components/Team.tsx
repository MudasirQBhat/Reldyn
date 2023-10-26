import { FaArrowRight } from "react-icons/fa";
import TeamSlider from "./TeamSlider";

const Team = () => {
  return (
    <>
      <div className="pt-4 w-[90%] mx-auto" data-aos="fade-right">
        <div className="border-t-4 border-primary-color w-16 ml-2"></div>
        <p className="p-2 text-color-blackblue text-4xl md:text-6xl font-roboto font-bold line-20">
          Meet our team
        </p>

        <p className="p-2 font-inter text-secondary-color text-sm md:text-xl w-[90%] lg:w-[50%]">
          We believe in a straightforward philosophy: recruit a team of diverse
          and passionate individuals, and cultivate a culture that empowers each
          person to put out their best work.
        </p>
        <TeamSlider />
        <div className="flex items-center mt-4">
          <button className="px-6 py-4 flex justify-center items-center space-x-1 text-color-white bg-primary-color text-sm rounded-full">
            <p>Contact Us</p>
            <FaArrowRight className="text-xs font-thin mt-1" />
          </button>
          <button className="px-6 py-3 ml-2 bg-color-white text-sm border-2 border-primary-color rounded-full text-primary-color font-inter font-light">
            Our Services
          </button>
        </div>
      </div>
    </>
  );
};

export default Team;
