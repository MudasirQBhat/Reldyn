const ContactInfo = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-primary-color to-bottom-footer-background rounded-tl-3xl rounded-tr-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl lg:rounded-tr-none text-color-white p-6 lg:pl-36 lg:pr-16 py-6 lg:py-10 space-y-3 lg:space-y-6 w-full">
        <div>
          <h1
            data-aos="slide-right"
            className="font-roboto text-3xl md:text-5xl font-600"
          >
            Want to connect with us?
          </h1>
        </div>
        <div className="space-y-1">
          <p data-aos="slide-right" className="text-base md:text-sm font-sans">
            E-MAIL
          </p>
          <p
            data-aos="slide-right"
            className="font-inter text-base md:text-3xl font-700"
          >
            info@reldyn.com
          </p>
        </div>
        <div className="space-y-1">
          <p data-aos="slide-right" className="text-base md:text-sm font-sans">
            PHONE
          </p>
          <p
            data-aos="slide-right"
            className="font-inter text-base md:text-3xl font-700"
          >
            +1 555 505 5050
          </p>
        </div>
        <div className="space-y-1">
          <p data-aos="slide-right" className="text-base md:text-sm font-sans">
            ADDRESS
          </p>
          <p
            data-aos="slide-right"
            className="font-inter text-base md:text-3xl font-700"
          >
            62 West 55th Street, Suite 302 New York, NY, <br />
            10230
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
