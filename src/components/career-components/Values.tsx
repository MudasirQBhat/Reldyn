import { ourValues } from "../../utils/data";
import { v4 as uuidv4 } from "uuid";

const Values = () => {
  return (
    <>
      <div className="lg:flex w-full mx-auto flex-wrap space-y-4 lg:gap-36 py-10">
        {ourValues.map((value) => (
          <div
            key={uuidv4()}
            className="flex gap-4 rounded-lg bg-gradient-to-b from-gray-300 to-gray-100 py-4 pl-4 pr-8 lg:w-1/4 justify-center items-center"
          >
            <img
              src={value.image}
              alt="Serial Image"
              className="text-primary-color h-1/3 md:h-1/2"
            />
            <p className="font-roboto font-font-700 text-1xl md:text-2xl text-color-purple">
              {value.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Values;
