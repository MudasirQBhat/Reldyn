import { FaArrowRight } from "react-icons/fa";

const ButtonTopSection = () => {
  return (
    <>
      <div className="bg-primary-background flex items-center mt-4">
        <button className="px-6 py-4 flex justify-center items-center space-x-1 text-color-white bg-primary-color text-sm rounded-full">
          <p>Contact Us</p>
          <FaArrowRight className="text-xs font-thin mt-1" />
        </button>
        <button className="px-6 py-3 ml-2 bg-color-white text-sm border-2 border-primary-color rounded-full text-primary-color font-inter font-light">
          View Our Products
        </button>
      </div>
    </>
  );
};

export default ButtonTopSection;
