type careerReviewsProps = {
  image?: string;
  quote?: string;
  name?: string;
  position?: string;
  review?: string;
  isRowReverse?: boolean;
};

const CareerReviews: React.FC<careerReviewsProps> = ({
  image,
  quote,
  name,
  position,
  review,
  isRowReverse,
}) => {
  return (
    <>
      <div
        className={`w-full px-6 lg:px-20 py-10 gap-8 md:gap-48 items-center flex flex-col ${
          isRowReverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
        data-aos="fade-right"
      >
        <div className="w-full md:w-2/5">
          <img src={image} alt="Career Image" />
        </div>
        <div className="w-full md:w-3/5 space-y-8">
          <div className="">
            <h1 className="font-roboto text-2xl md:text-4xl font-black">
              "{quote}"
            </h1>
            <p className="font-roboto text-primary-color font-font-700 mt-2">
              {name}
            </p>
            <p className="font-roboto text-color-light-black">{position}</p>
          </div>
          <div className="">
            <p className="font-roboto text-color-light-black">{review}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerReviews;
