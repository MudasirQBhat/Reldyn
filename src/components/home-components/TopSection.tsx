import ButtonTopSection from "./ButtonTopSection";
import KickStart from "./KickStart";
import FrontImage from "./FrontImage";

const TopSection = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col md:flex-row justify-between bg-primary-background pb-6 w-full space-y-6 md:space-y-0 md:gap-8 px-6 lg:px-20"
    >
      <div
        data-aos="fade-right"
        className="flex flex-col md:flex-row items-center"
      >
        <div className="md:order-1">
          <KickStart />
          <ButtonTopSection />
        </div>
      </div>
      <div className="md:order-2">
        <FrontImage />
      </div>
    </div>
  );
};

export default TopSection;
