import ContactForm from "./ContactForm";
import contactFormImage1 from "../../assets/ContactFormImage.png";
import contactFormImage2 from "../../assets/ContactFormImage2.png";

const ContactMiddleSection = () => {
  return (
    <>
      <div className="bg-primary-background" data-aos="fade-right">
        <div className="grid grid-cols-8 md:grid-cols-12 w-[90%] mx-auto py-20 pb-80">
          <div className="w-full  col-span-8 md:col-span-8 relative -bottom-4 md:-right-4 z-10 md:-bottom-0">
            <ContactForm />
          </div>
          <div className=" w-full  col-span-8 md:col-span-4">
            <div className="w-full relative">
              <img
                src={contactFormImage1}
                alt="Malaysia Contact Image"
                className="md:rounded-tr-3xl"
              />
              <h1 className=" font-roboto text-primary-color font-font-700 text-1xl md:text-2xl absolute top-20 left-4 md:top-36 md:left-12">
                Malaysia
              </h1>
              <p className="font-roboto text-sm md:text-base absolute  top-28 left-4 w-72 md:w-72 md:top-48 md:left-12 text-color-natural-black">
                Suite Prague Centrepoint South, Penthouse Level 27, Lingkaran
                Syed Putra, Mid Valley City, 58000 Kuala Lumpur
              </p>
            </div>
            <div className="w-full relative">
              <img
                src={contactFormImage2}
                alt="Malaysia Contact Image"
                className="rounded-b-3xl md:rounded-br-3xl md:rounded-bl-none"
              />
              <h1 className=" font-roboto text-primary-color font-font-700 text-1xl md:text-2xl absolute top-20 left-4 md:top-36 md:left-12">
                India
              </h1>
              <p className="font-roboto text-sm md:text-base absolute top-28 left-4 w-72 md:w-72 md:top-48 md:left-12 text-color-natural-black">
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

{
  /* <div>
  <div className="bg-red-500 h-20 w-20">
    <p>Left div</p>
  </div>
  <div className="bg-green-500 h-20 w-20">
    <p className="">Right div</p>
  </div>
</div> */
}
