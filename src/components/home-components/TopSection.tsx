import ButtonTopSection from "./ButtonTopSection";
import KickStart from "./KickStart";
import FrontImage from "./FrontImage";
import { useNavigate } from "react-router-dom";

const TopSection = () => {
  const navigate = useNavigate();
  const handleContactUsOnClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col md:flex-row justify-between 2xl:justify-around bg-primary-background pb-6 w-full space-y-6 md:space-y-0 md:gap-8 px-6 lg:px-20"
    >
      <div
        data-aos="fade-right"
        className="flex flex-col md:flex-row items-center"
      >
        <div className="md:order-1">
          <KickStart />
          <ButtonTopSection
            buttons={[
              {
                label: "Contact Us",
                onClick: handleContactUsOnClick,
                primary: true,
              },
              {
                label: "View Our Products",
                onClick: () => {
                  // Handle View Products action
                },
                primary: false,
              },
            ]}
          />
        </div>
      </div>
      <div className="md:order-2">
        <FrontImage />
      </div>
    </div>
  );
};

export default TopSection;
