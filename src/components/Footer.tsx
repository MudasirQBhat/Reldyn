import { Link } from "react-router-dom";
import reldynLogo from "../assets/reldyn-logo.svg";
import ContactComponent from "./ContactComponent";

const Footer = () => {
  return (
    <>
      <div data-aos="slide-up">
        <ContactComponent />
        <div className=" items-end  bg-color-purple  pb-12 pt-80">
          <div className="flex flex-col lg:flex-row w-[90%] mx-auto lg:justify-between lg:mt-12 space-y-10 lg:space-y-0">
            <div
              // data-aos="slide-right"
              className="font-inter space-y-1 lg:space-y-4 w-[40%]"
            >
              <div className="">
                <Link to="#">
                  <img
                    src={reldynLogo}
                    alt="Reldyn Logo"
                    className="w-40 h-8"
                  />
                </Link>
              </div>
              <div>
                <p className=" text-xl md:text-3xl font-bold text-color-white leading-3xl">
                  We growing up your business with cloud transformation.
                </p>
              </div>
              <div>
                {" "}
                <p className="text-lg font-light text-color-white">
                  Malaysia, 2023.
                </p>
              </div>
            </div>
            <div
              // data-aos="slide-left"
              className="flex flex-col lg:flex-row lg:justify-around gap-4 lg:gap-10 w-[50%] "
            >
              <div className="lg:w-1/5 font-inter space-y-4 lg:space-y-8 ">
                <div>
                  <h5 className="text-xl font-600 text-color-white">Pages</h5>
                </div>
                <div className="flex flex-col">
                  <Link to="#" className="text-color-neutral-silver text-sm">
                    About Us
                  </Link>
                  <Link to="#" className="text-color-neutral-silver text-sm">
                    Services
                  </Link>
                  <Link to="#" className="text-color-neutral-silver text-sm">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="lg:w-2/5 font-inter space-y-4 lg:space-y-8">
                <div>
                  <h5 className="text-xl font-600 text-color-white">
                    Malaysia
                  </h5>
                </div>
                <div>
                  <p className="text-color-neutral-silver text-sm">
                    Suite Prague Centrepoint South, Penthouse Level 27,
                    Lingkaran Syed Putra, Mid Valley City, 58000 Kuala Lumpur
                  </p>
                </div>
              </div>
              <div className="lg:w-2/5 font-inter space-y-4 lg:space-y-8">
                <div>
                  <h5 className="text-xl font-600 text-color-white">India</h5>
                </div>
                <div>
                  <p className="text-color-neutral-silver text-sm">
                    Unit-629, 6th floor, Vascon Almonte IT Park, Rakshak Nagar,
                    Kharadi, Pune - 411014
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
