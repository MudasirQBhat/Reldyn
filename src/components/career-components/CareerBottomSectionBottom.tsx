import OpportunitiesForm from "./OpportunitiesForm";
import opportunitiesImage from "../../assets/OpportunitiesImage.png";

const CareerBottomSectionBottom = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row w-[90%] mx-auto gap-10 md:gap-48 py-6 md:py-16 items-center pb-60 md:pb-96"
        data-aos="fade-right"
      >
        <div className="w-full md:w-3/5 space-y-4 md:space-y-8">
          <h1 className=" text-color-purple font-black font-roboto text-3xl md:text-5xl">
            Stay informed about{" "}
            <span className="text-primary-color font-roboto font-black">
              new opportunities
            </span>{" "}
          </h1>
          <p className="font-roboto text-color-purple text-sm md:text-1xl">
            Want to know what are we up to, subscribe to our communications
          </p>
          <OpportunitiesForm />
        </div>
        <div className="w-2/5 md:w-1/5">
          <img
            src={opportunitiesImage}
            alt="Opportunities Image"
            className="md:h-1/5 object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default CareerBottomSectionBottom;
