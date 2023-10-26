import TopSection from "../components/TopSection";

import MiddleSection from "../components/about-components/MiddleSection";
import DiverseExperience from "../components/about-components/DiverseExperience";
import aboutTopSectionImage from "../assets/About-Top-Section-Image.png";

const About = () => {
  return (
    <>
      <div className="bg-primary-background">
        <TopSection
          title="ABOUT US"
          heading1="Dedicated"
          heading1Color="text-primary-color"
          heading2="Driven and"
          heading3=""
          heading4="love"
          heading5="with what we do"
          sectionImg={aboutTopSectionImage}
          description="We are your digital partners, dedicated to transforming businesses with innovative web solutions. Our passion is to bring your digital dreams to life with creativity and cutting-edge technology."
        />
        <MiddleSection />
        <DiverseExperience />
      </div>
      <div className="bg-color-purple h-40 mb-140"></div>
    </>
  );
};

export default About;
