import { FaArrowRight } from "react-icons/fa";
import boostBusinessImage from "../../assets/Boost-Business-Image.png";

const BoostBusiness = () => {
  return (
    <div className="bg-color-dark-silver pb-16 mt-4 md:mt-2 lg:mt-0">
      <div
        data-aos="fade-right"
        className="flex flex-col pb-6 gap-0 md:flex-row items-center justify-between 2xl:justify-around w-full px-6 lg:px-20 xl:gap-96"
      >
        <div className="pt-24 flex flex-col  md:items-start gap-4 md:text-left">
          <div>
            <p className="text-4xl text-color-purple font-roboto font-semibold leading-14">
              Boost your Business
              <br />
              with Reldyn
            </p>
          </div>
          <div>
            <p className="font-roboto font-lg font-400 text-black w-full md:w-120">
              Share your ideas and vision with us. Together we can transform
              them into impactful software products
            </p>
          </div>
          <div>
            <button className="px-10 py-4 mt-2 flex justify-center items-center space-x-2 bg-primary-color text-color-white text-sm rounded-full">
              <p>Contact Us</p>
              <FaArrowRight className="text-xs font-thin" />
            </button>
          </div>
        </div>
        <div data-aos="fade-right">
          <img
            src={boostBusinessImage}
            alt="Reldyn Image"
            className="w-full md:w-full mt-24 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BoostBusiness;
