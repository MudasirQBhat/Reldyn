import ContactInfo from "./ContactInfo";
import MapComponent from "./MapComponent";

const ContactComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center relative top-56 w-full px-6 lg:px-20">
      <div className="h-3/4 lg:w-3/5">
        <ContactInfo />
      </div>
      <div className=" lg:w-2/5">
        <MapComponent />
      </div>
    </div>
  );
};

export default ContactComponent;
