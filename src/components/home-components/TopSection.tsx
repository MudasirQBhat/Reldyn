import ButtonTopSection from "./ButtonTopSection";
import KickStart from "./KickStart";
import FrontImage from "./FrontImage";

const TopSection = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col md:flex-row bg-primary-background pb-6 w-full md:w-[90%] mx-auto space-y-6 md:space-y-0 md:space-x-12"
    >
      <div
        data-aos="fade-right"
        className="flex flex-col md:flex-row items-center"
      >
        <div className="md:order-1">
          <KickStart />
          <ButtonTopSection />
        </div>
        <div className="md:order-2">
          <FrontImage />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
