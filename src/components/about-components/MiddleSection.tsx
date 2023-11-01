import Reldyn from "./Reldyn";
import TopMiddleSection from "./TopMiddleSection";
import Team from "./Team";

const MiddleSection = () => {
  return (
    <div
      className="bg-gradient-to-b from-color-light-gray to-color-white pb-12"
      data-aos="fade-right"
    >
      <div className="w-4/5 md:w-3/4 lg:w-1/2 xl:w-2/5  py-10 px-6 lg:px-20">
        <p className="font-roboto text-secondary-color text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Unlock insights and drive decisions with our data and analytics
          expertise. Transform raw data into strategic brilliance for your
          business.
        </p>
      </div>
      <TopMiddleSection />
      <Reldyn />
      <Team />
    </div>
  );
};

export default MiddleSection;
