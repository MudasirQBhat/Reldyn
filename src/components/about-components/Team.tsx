import TeamSlider from "./TeamSlider";
import ButtonTopSection from "../home-components/ButtonTopSection";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  const handleContactUsOnClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="pt-4 w-full px-6 lg:px-20 mx-auto" data-aos="fade-right">
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
        {/* <div className="flex flex-col md:flex-row md:items-center mt-4 space-y-2 md:space-y-0 ">
          <button className="px-6 py-4 flex justify-center items-center space-x-1 text-color-white bg-primary-color text-sm rounded-full">
            <p>Contact Us</p>
            <FaArrowRight className="text-xs font-thin mt-1" />
          </button>
          <button className="px-6 py-3 ml-2 bg-color-white text-sm border-2 border-primary-color rounded-full text-primary-color font-inter font-light">
            Our Services
          </button>
        </div> */}
        <ButtonTopSection
          buttons={[
            {
              label: "Contact Us",
              onClick: handleContactUsOnClick,
              primary: true,
            },
            {
              label: "Our Services",
              onClick: () => {
                // Handle Our Services action
              },
              primary: false,
            },
          ]}
        />
      </div>
    </>
  );
};

export default Team;
