import OpenPositions from "./OpenPositions";

const CareerBottomSectionMiddle = () => {
  return (
    <>
      <div
        className="bg-primary-background w-full px-6 lg:px-20"
        data-aos="fade-right"
      >
        <h1 className="text-color-purple text-3xl font-black font-roboto">
          Open Positions
        </h1>
        <OpenPositions />
      </div>
    </>
  );
};

export default CareerBottomSectionMiddle;
