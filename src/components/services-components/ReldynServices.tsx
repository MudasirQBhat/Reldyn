type ReldynServicesProps = {
  image?: string;
  serviceName?: string;
  description?: string;
  solutionsArray: string[];
  isRowReverse?: boolean;
};

const ReldynServices: React.FC<ReldynServicesProps> = ({
  image,
  serviceName,
  description,
  solutionsArray,
  isRowReverse,
}) => {
  return (
    <>
      <div
        className={`w-full px-6 lg:px-20 py-10 gap-8 md:gap-20 xl:gap-48 items-center flex flex-col mt-6 ${
          isRowReverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
        data-aos="fade-right"
      >
        <div className="w-full md:w-2/5">
          <img src={image} alt="Career Image" />
        </div>
        <div className="w-full md:w-3/5 space-y-8">
          <div className="">
            <h1 className="font-roboto text-2xl md:text-4xl font-black text-color-purple">
              {serviceName}
            </h1>
            <p className="font-roboto text-color-black font-font-400 mt-2">
              {description}
            </p>
          </div>
          <div className="">
            <p className="font-roboto text-color-black text-2xl font-font-700 mb-4">
              Solutions
            </p>
            <div
              className="font-roboto text-color-light-black"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "30%",
              }}
            >
              {solutionsArray?.map((item: string, index: number) => (
                <span
                  key={index}
                  className="border-l-4 border-primary-color pl-2 pr-2 text-color-black font-roboto font-font-400 text-sm md:text-base"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReldynServices;
