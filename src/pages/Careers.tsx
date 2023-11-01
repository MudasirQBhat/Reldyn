import TopSection from "../components/TopSection";
import careersTopSectionImage from "../assets/Career-Top-Section-Image.png";
import CareerMiddleSection from "../components/career-components/CareerMiddleSection";
import CareerBottomSection from "../components/career-components/CareerBottomSection";
import LifeAtReldyn from "../components/career-components/LifeAtReldyn";

const Careers = () => {
  return (
    <>
      <TopSection
        title="CAREERS"
        heading1="Let's grow"
        heading1Color="text-primary-color"
        heading2="Together"
        heading3=""
        heading4=""
        heading5=""
        sectionImg={careersTopSectionImage}
        description="Be a part of our growing family of professionals. We have offices across 4 continents see where you can join us!"
        isServicesPage={false}
      />
      <CareerMiddleSection />
      <LifeAtReldyn />
      <CareerBottomSection />
      <div className="h-40 mb-160"></div>
    </>
  );
};

export default Careers;
