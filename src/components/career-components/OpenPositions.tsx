import { openPositions } from "../../utils/data";
import { v4 as uuidv4 } from "uuid";
import { FaArrowRight } from "react-icons/fa";

const OpenPositions = () => {
  return (
    <>
      <div className="space-y-4 my-8">
        {openPositions.map((position) => (
          <div className="flex bg-color-white w-full md:w-3/5 rounded-lg p-6 justify-between">
            <div className="">
              <p className="font-roboto text-primary-color font-font-700">
                {position.position}
              </p>
              <p className="font-roboto text-color-gray-800">
                {position.location}
              </p>
            </div>
            <div className="">
              <button className="px-4 py-2 md:px-8 md:py-4 flex justify-center items-center space-x-1 text-color-white bg-primary-color text-sm rounded-full">
                <p className="text-sm md:text-base font-roboto">Apply</p>
                <FaArrowRight className="text-xs font-thin mt-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OpenPositions;
