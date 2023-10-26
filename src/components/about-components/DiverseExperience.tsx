import FAQ from "./FAQ";

const DiverseExperience = () => {
  return (
    <>
      <div className="bg-color-purple pb-96" data-aos="fade-right">
        <div className="pt-16 w-[90%] mx-auto">
          <div className="border-t-4 border-primary-color w-16 ml-2"></div>
          <p className="p-2 text-color-dark-silver text-4xl md:text-6xl font-roboto font-bold line-20">
            Our Diversese Experience
          </p>

          <p className="p-2 font-inter text-color-neutral-silver text-sm md:text-xl w-[90%] lg:w-[50%]">
            We believe in a straightforward philosophy: recruit a team of
            diverse and passionate individuals, and cultivate a culture that
            empowers each person to put out their best work.
          </p>
        </div>
        <FAQ />
      </div>
    </>
  );
};

export default DiverseExperience;
