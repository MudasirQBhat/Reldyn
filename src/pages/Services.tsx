import TopSection from "../components/TopSection";
import servicesTopImage from "../assets/ServicesTopImage.png";
import ServicesMiddleSection from "../components/services-components/ServicesMiddleSection";
import BoostBusiness from "../components/services-components/BoostBusiness";

const Services = () => {
  return (
    <>
      <div className="bg-primary-background">
        <div className="w-full mx-auto">
          <TopSection
            title="SERVICES"
            heading1="Explore a whole range of"
            heading1Color="text-primary-color"
            heading2=""
            heading3="Tailored solutions for varied"
            heading4=""
            heading5="business needs"
            sectionImg={servicesTopImage}
            description=""
            isServicesPage={true}
          />
        </div>
      </div>
      <ServicesMiddleSection />
      <BoostBusiness />
    </>
  );
};

export default Services;
