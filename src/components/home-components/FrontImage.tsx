import frontImage from "../../assets/ReldynFrontImage.png";

const FrontImage = () => {
  return (
    <div className="bg-primary-background pt-14">
      <img
        src={frontImage}
        alt="Reldyn Image"
        className="w-full h-auto" // Apply these classes for responsiveness
      />
    </div>
  );
};

export default FrontImage;
