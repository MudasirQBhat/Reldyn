import ReldynServices from "./ReldynServices";
import cloudDigitalTransformationImage from "../../assets/CloudDigitalTransformationImage.png";
import modernApplicationDevelopmentImage from "../../assets/ModernApplicationDevelopmentImage.png";
import uiuxImage from "../../assets/UIUXImage.png";
import dataAndAnalystImage from "../../assets/DataandAnalystImage.png";

const servicesMiddleSection = () => {
  const cloudDigitalTransformationArray = [
    "Consulting",
    "Application Modernization",
    "Cloud Native Development",
    "Cloud Migration",
    "Support and Maintenance",
  ];
  const modernApplicationDevelopmentArray = [
    "Microservices",
    "DevOPs",
    "Web",
    "Cloud Native Development",
    "Mobile",
  ];
  const uiuxArray = [
    "User Centric Designs",
    "Innovative Visuals",
    "Responsive Design",
    "Interactive Prototyping",
  ];
  const dataAndAnalystArray = [
    "Data Collection and Integration",
    "Predictive Analyst",
    "Advanced Reporting",
    "Strategic Insights",
  ];
  return (
    <>
      <ReldynServices
        image={cloudDigitalTransformationImage}
        serviceName="Cloud Digital Transformation"
        description="At Reldyn, we understand that the digital landscape is constantly evolving, presenting both challenges and opportunities. Embracing cloud digital transformation is not just a trend; it's a strategic imperative to ensure your business remains competitive and agile. That's why we offer a comprehensive suite of Cloud Digital Transformation Services tailored to your unique needs."
        solutionsArray={cloudDigitalTransformationArray}
        isRowReverse={false}
      />
      <ReldynServices
        image={modernApplicationDevelopmentImage}
        serviceName="Modern Application Development"
        description="In a rapidly evolving digital landscape, the key to staying ahead of the curve is adopting Modern Application Development. At Reldyn, we specialize in creating cutting-edge applications that drive innovation, enhance user experiences, and position your business for long-term success"
        solutionsArray={modernApplicationDevelopmentArray}
        isRowReverse={true}
      />
      <ReldynServices
        image={uiuxImage}
        serviceName="UI/UX"
        description="In the fast-paced digital era, the significance of User Interface (UI) and User Experience (UX) cannot be understated when it comes to the triumph of any digital product or application. At [Your Software Company Name], we are fully committed to the art of crafting UI/UX designs that not only boast visual elegance but, more importantly, ensure a smooth, user-friendly, and enjoyable journey for your users"
        solutionsArray={uiuxArray}
        isRowReverse={false}
      />
      <ReldynServices
        image={dataAndAnalystImage}
        serviceName="Data And Analytics"
        description="In today's data-driven world, harnessing the power of data and analytics is paramount for making informed decisions and gaining a competitive edge. At [Your Company Name], we provide comprehensive Data and Analytics services to help you unlock the insights hidden within your data and transform them into actionable strategies"
        solutionsArray={dataAndAnalystArray}
        isRowReverse={true}
      />
    </>
  );
};

export default servicesMiddleSection;
