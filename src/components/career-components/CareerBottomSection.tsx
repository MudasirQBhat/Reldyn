import CareerBottomSectionMiddle from "./CareerBottomSectionMiddle";
import CareerBottomSectionTop from "./CareerBottomSectionTop";
import CareerBottomSectionBottom from "./CareerBottomSectionBottom";

const CareerBottomSection = () => {
  return (
    <>
      <div className="bg-primary-background py-6" data-aos="fade-right">
        <CareerBottomSectionTop />
        <CareerBottomSectionMiddle />
        <CareerBottomSectionBottom />
      </div>
    </>
  );
};

export default CareerBottomSection;
