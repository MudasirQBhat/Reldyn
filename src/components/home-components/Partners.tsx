import CompanySlide from "./CompanySlide";

const Partners = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col md:flex-row items-center py-6 md:py-10 w-full px-4 md:px-20 mx-auto bg-primary-background"
    >
      <div
        data-aos="fade-right"
        className="w-full md:w-1/4 text-center md:text-left"
      >
        <p className="font-roboto text-4xl md:text-5xl text-black font-extrabold">
          Our Partners
        </p>
        <p className="text-lg md:text-xl font-inter text-secondary-color mt-2 md:ml-1">
          We have been working with
          <br />
          some Fortune 500 clients
        </p>
      </div>
      <div data-aos="fade-left" className="w-full md:w-3/4">
        <CompanySlide />
      </div>
    </div>
  );
};

export default Partners;
