import OurComponent from "./OurComponent";
import ourMissionImage from "../../assets/OurMissionImage.png";
import ourVisionImage from "../../assets/OurVisionImage.png";

const TopMiddleSection = () => {
  return (
    <div
      className="flex flex-col lg:flex-row w-full px-6 lg:px-20 space-y-14 lg:space-y-0 lg:space-x-4"
      data-aos="fade-right"
    >
      <div className="lg:w-3/5 bg-color-neutral-silver rounded-3xl lg:p-12">
        <OurComponent
          title="Our Mission"
          description="To be the catalyst that enables our partners to harness the full potential of digitalization to achieve transformative results."
          image={ourMissionImage}
          imageName="Our Mission Image"
        />
      </div>

      <div className="lg:w-2/5 bg-color-light-pink rounded-3xl lg:p-12">
        <OurComponent
          title="Our Vision"
          description="Building a future of reliability and digital excellence. With ample opportunities for sustained development and growth."
          image={ourVisionImage}
          imageName="Our Vision Image"
        />
      </div>
    </div>
  );
};

export default TopMiddleSection;
