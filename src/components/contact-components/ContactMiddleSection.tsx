import ContactForm from "./ContactForm";
import contactFormImage1 from "../../assets/ContactFormImage.png";
import contactFormImage2 from "../../assets/ContactFormImage2.png";

const ContactMiddleSection = () => {
  return (
    <>
      <div
        className="bg-primary-background text-center  "
        data-aos="fade-right"
      >
        <div className="grid grid-cols-8 lg:grid-cols-8 mx-auto w-full   px-6 lg:px-20 py-20 pb-80">
          <div className="w-full col-span-8  xl:col-span-4 relative lg-bottom-4 lg:-right-0 z-10 lg:-bottom-0 xl:translate-x-6">
            <ContactForm />
          </div>
          <div className=" w-full   col-span-8  xl:col-span-4 mb-28 md:mb-0">
            <div className="w-full relative">
              <img
                src={contactFormImage1}
                alt="Malaysia Contact Image"
                className="xl:rounded-tr-3xl w-full md:h-full"
              />
              <h1 className=" font-roboto text-primary-color font-font-700 text-1xl lg:text-2xl absolute top-20 left-4 lg:top-36 lg:left-12">
                Malaysia
              </h1>
              <p className="font-roboto text-sm lg:text-base absolute  top-28 left-4 sm:w-60 md:w-72 lg:w-72 lg:top-44 lg:left-12 text-color-natural-black">
                Suite Prague Centrepoint South, Penthouse Level 27, Lingkaran
                Syed Putra, Mid Valley City, 58000 Kuala Lumpur
              </p>
            </div>
            <div className="w-full  relative">
              <img
                src={contactFormImage2}
                alt="Malaysia Contact Image"
                className="rounded-b-3xl md:rounded-b-3xl lg:rounded-bl-3xl w-full  xl:rounded-bl-none"
              />
              <h1 className=" font-roboto text-primary-color font-font-700 text-1xl lg:text-2xl absolute top-20 left-4 lg:top-36 lg:left-12">
                India
              </h1>
              <p className="font-roboto text-sm lg:text-base absolute top-28 left-4 sm:w-60 md:w-72 lg:w-72 lg:top-48 lg:left-12 text-color-natural-black">
                Unit-629, 6th floor, Vascon Almonte IT Park, Rakshak Nagar,
                Kharadi, Pune - 411014
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMiddleSection;
