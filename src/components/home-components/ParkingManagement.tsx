import { FaArrowRight } from "react-icons/fa";
import macbookImage from "../../assets/Macbook Pro.png";

const ParkingManagement = () => {
  return (
    <div className="bg-color-dark-silver">
      <div
        data-aos="fade-right"
        className="flex flex-col pb-6 gap-0 md:flex-row items-center justify-between w-[85%] mx-auto md:gap-24"
      >
        <div className="pt-24 flex flex-col  md:items-start gap-4 md:text-left">
          <p className="text-color-darker-silver text-xl font-semibold font-roboto tracking-widest border-b-4  border-primary-color w-12 pb-2 ">
            PRODUCTS
          </p>
          <div>
            <p className="text-5xl text-primary-color font-roboto font-semibold leading-14">
              Parking
              <br />
              Management
            </p>
          </div>
          <div>
            <p className="font-inter font-lg font-400 text-secondary-color w-full md:w-96">
              Empowering businesses with on-demand resources and innovation
              through cloud computing, while ensuring reliability, security, and
              global accessibility through robust infrastructure.
            </p>
          </div>
          <div>
            <button className="px-10 py-4 mt-2 flex justify-center items-center space-x-2 bg-primary-color text-color-white text-sm rounded-full">
              <p>Know More</p>
              <FaArrowRight className="text-xs font-thin mt-1" />
            </button>
          </div>
        </div>
        <div data-aos="fade-right">
          <img
            src={macbookImage}
            alt="Reldyn Image"
            className="w-full md:w-auto mt-24"
          />
        </div>
      </div>
    </div>
  );
};

export default ParkingManagement;
