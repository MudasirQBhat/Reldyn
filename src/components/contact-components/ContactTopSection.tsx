import contactImage from "../../assets/Contact-Image.png";

const ContactTopSection = () => {
  return (
    <>
      <div className="bg-primary-background" data-aos="fade-right">
        <div className="w-full px-6 lg:px-20 flex flex-col justify-between 2xl:justify-around items-center lg:flex-row">
          <div className="pt-16 space-y-8">
            <div className="space-y-4">
              <p className=" text-primary-color  text-4xl md:text-6xl lg:text-8xl font-roboto font-black line-20">
                Contact Us
              </p>

              <p className=" font-roboto font-font-700 text-secondary-color text-sm lg:text-xl w-1/2">
                Dial, Email, or Drop By We're All Ears
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div>
                <p className="font-roboto text-color-natural-gray text-xs">
                  Email
                </p>
                <p className="font-roboto font-font-700 text-color-black text-1xl lg:text-2xl">
                  info@reldyn.com
                </p>
              </div>
              <div className="">
                <p className="font-roboto text-color-natural-gray text-xs">
                  Phone
                </p>
                <p className="font-roboto font-font-700 text-color-black text-1xl lg:text-2xl">
                  +1 555 505 5050
                </p>
              </div>
              <div className="">
                <p className="font-roboto text-color-natural-gray text-xs">
                  Address
                </p>
                <p className="font-roboto font-font-700 text-color-black text-1xl lg:text-2xl">
                  62 West 55th Street, Suite 302 New York, NY, 10230
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <img
              src={contactImage}
              alt="Reldyn Image"
              className="w-full lg:w-4/5 mt-12 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactTopSection;
