// import { FaArrowRight } from "react-icons/fa";

// const ButtonTopSection = () => {
//   return (
//     <>
//       <div className="bg-primary-background flex flex-col md:flex-row md:items-center mt-4 space-y-2 md:space-y-0">
//         <button className="px-6 py-4 flex justify-center items-center space-x-1 text-color-white bg-primary-color text-sm rounded-full">
//           <p>Contact Us</p>
//           <FaArrowRight className="text-xs font-thin " />
//         </button>
//         <button className="px-6 py-3 ml-2 bg-color-white text-sm border-2 border-primary-color rounded-full text-primary-color font-inter font-light">
//           View Our Products
//         </button>
//       </div>
//     </>
//   );
// };

// export default ButtonTopSection;

import { FaArrowRight } from "react-icons/fa";

interface Button {
  label: string;
  onClick: () => void;
  primary?: boolean;
}

interface ButtonTopSectionProps {
  buttons: Button[];
}

const ButtonTopSection: React.FC<ButtonTopSectionProps> = ({ buttons }) => {
  return (
    <>
      <div className=" flex flex-col gap-2 md:flex-row md:items-center mt-4 space-y-2 md:space-y-0">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`
              px-6 py-4 flex justify-center items-center space-x-1 text-sm rounded-full
              ${
                button.primary
                  ? "bg-primary-color text-color-white"
                  : "bg-color-white text-primary-color border-2 border-primary-color"
              }
            `}
            onClick={button.onClick}
          >
            <p>{button.label}</p>
            {button.primary && <FaArrowRight className="text-xs font-thin" />}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonTopSection;
