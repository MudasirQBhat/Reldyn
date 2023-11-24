import { FaArrowRight } from "react-icons/fa";
import lifeAtReldynImage1 from "../../assets/LifeatReldynImage1.png";
import lifeAtReldynImage2 from "../../assets/LifeatReldynImage2.png";

const Careers = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-color-light-gray to-color-white">
        <div
          data-aos="fade-right"
          className="flex flex-col pt-6 md:flex-row items-center justify-between 2xl:justify-around w-full px-6 lg:px-20 mx-auto gap-24"
        >
          <div className="mt-4 flex flex-col gap-4  md:text-left">
            <p className="text-color-darker-silver text-xl font-semibold font-roboto tracking-widest border-b-4 border-primary-color w-12 pb-2">
              CAREERS
            </p>
            <div>
              <p className="text-5xl text-color-black font-roboto font-semibold leading-14">
                Life at
                <br />
                <span className="text-primary-color">RELDYN</span>
              </p>
            </div>
            <div>
              <p className="font-inter font-lg font-400 text-secondary-color w-full md:w-96 justify-evenly">
                Empowering businesses with on-demand resources and innovation
                through cloud computing, while ensuring reliability, security,
                and global accessibility through robust infrastructure.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
              <button className="w-full md:w-auto px-6 py-4 flex justify-center items-center space-x-2 bg-primary-color text-color-white text-sm rounded-full">
                <p>Know More</p>
                <FaArrowRight className="text-xs font-thin mt-1" />
              </button>
              <button className="w-full md:w-auto mt-2 md:mt-0 px-6 py-4 flex justify-center items-center space-x-2 bg-color-white text-primary-color text-sm rounded-full">
                <p>About Company</p>
                <FaArrowRight className="text-xs font-thin mt-1" />
              </button>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="flex flex-col md:flex-row gap-2 mt-4 md:mt-24"
          >
            <div className="flex flex-col gap-2">
              <img
                src={lifeAtReldynImage1}
                alt="Reldyn Image"
                className="w-full"
              />
              <button className="w-full bg-[#ABBED1] rounded-lg h-44 relative">
                <p className="text-color-white font-inter text-3xl font-700 absolute top-4 left-4">
                  Our Values
                </p>
                <FaArrowRight className="w-12 text-color-white absolute bottom-4 right-2" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <button className="w-full h-40 bg-primary-color rounded-lg relative">
                <p className="text-color-white font-inter text-3xl font-700 absolute top-4 left-4">
                  Open Positions
                </p>
                <FaArrowRight className="w-12 text-color-white absolute bottom-4 right-4" />
              </button>
              <img
                src={lifeAtReldynImage2}
                alt="Reldyn Image"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
