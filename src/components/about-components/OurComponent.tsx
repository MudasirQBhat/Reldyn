// import React from "react";

// interface OurComponentProps {
//   title: string;
//   description?: string;
//   image?: string;
//   imageName?: string;
// }

// const Card: React.FC<OurComponentProps> = ({
//   title,
//   description,
//   image,
//   imageName,
// }) => {
//   return (
//     <div className="rounded-full relative">
//       <h2 className="font-roboto text-5xl font-black text-color-blackblue">
//         {title}
//       </h2>
//       <p className="font-roboto text-2xl w-96 mt-4">{description}</p>
//       {image && (
//         <img
//           src={image}
//           alt={imageName}
//           className="w-28 absolute -bottom-20 -right-10"
//         />
//       )}
//     </div>
//   );
// };

// export default Card;

import React from "react";

interface OurComponentProps {
  title: string;
  description?: string;
  image?: string;
  imageName?: string;
}

const Card: React.FC<OurComponentProps> = ({
  title,
  description,
  image,
  imageName,
}) => {
  return (
    <div className="rounded-full relative p-6 sm:p-6 md:p-10 lg:p-12">
      <h2 className="font-roboto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-color-blackblue">
        {title}
      </h2>
      <p className="font-roboto text-sm sm:text-base md:text-lg lg:text-xl w-64 sm:w-48 md:w-60 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
        {description}
      </p>
      {image && (
        <img
          src={image}
          alt={imageName}
          className="w-20 sm:w-24 md:w-28 lg:w-32 absolute -bottom-10 sm:-bottom-10 md:-bottom-10 lg:-bottom-20 -right-8 sm:-right-6 md:-right-12 lg:-right-14"
        />
      )}
    </div>
  );
};

export default Card;
