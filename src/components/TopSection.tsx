type TopSectionProps = {
  title?: string;
  heading1?: string;
  heading1Color?: string;
  heading2?: string;
  heading3?: string;
  heading4?: string;
  heading5?: string;
  description?: string;
  sectionImg?: string;
  isServicesPage?: boolean;
  isAboutPage?: boolean;
};

const TopSection: React.FC<TopSectionProps> = ({
  description,
  sectionImg,
  title,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  isServicesPage,
  isAboutPage,
}) => {
  return (
    <div className="bg-primary-background">
      <div
        data-aos="fade-right"
        className="flex flex-col pb-6 gap-0 md:flex-row items-center justify-between w-full px-6 lg:px-20 md:gap-32 lg:gap-48"
      >
        <div className="pt-16 flex flex-col  md:items-start gap-4 md:text-left">
          <p className="text-color-darker-silver text-xl font-semibold font-roboto tracking-widest border-b-4  border-primary-color w-28 pb-2">
            {title}
          </p>
          <div className={isServicesPage ? "xl:w-136" : "xl:w-120"}>
            <p
              className={`text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-roboto font-semibold leading-14 ${
                isServicesPage ? "text-color-blackblue" : "text-primary-color"
              }`}
            >
              {heading1}
              {isAboutPage ? "," : ""}{" "}
              <span className="text-color-blackblue">
                {heading2}
                <br /> {heading3}
              </span>{" "}
              {heading4}
              <span className="text-color-blackblue"> {heading5}</span>
            </p>
          </div>
          <div>
            <p className="font-inter font-lg font-400 text-secondary-color w-full md:w-80">
              {description}
            </p>
          </div>
        </div>
        <div data-aos="fade-right">
          <img
            src={sectionImg}
            alt="Reldyn Image"
            className="w-full md:w-full mt-12 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
