import Values from "./Values";

const CareerBottomSectionTop = () => {
  return (
    <>
      <div className="bg-primary-background py-8" data-aos="fade-right">
        <div className="pt-4 w-full px-6 lg:px-20 ">
          <div className="border-t-4 border-primary-color w-16 ml-2"></div>
          <p className="p-2 text-color-blackblue text-4xl md:text-6xl font-roboto font-bold line-20">
            Our Values
          </p>

          <p className="p-2 font-inter text-secondary-color text-sm md:text-xl w-[90%] lg:w-1/2">
            Our values are the foundation upon which we build meaningful
            relationships with our clients and exceptional digital solutions.
          </p>

          <Values />
        </div>
      </div>
    </>
  );
};

export default CareerBottomSectionTop;
