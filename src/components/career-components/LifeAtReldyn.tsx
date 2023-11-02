import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { lifeAtReldynImages } from "../../utils/data";
import { v4 as uuidv4 } from "uuid";
import { Autoplay } from "swiper/modules";

const LifeAtReldyn = () => {
  const breakpoints = {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  };

  return (
    <>
      <div className="w-full px-6 lg:px-20">
        <h1 className="font-roboto text-primary-color text-2xl md:text-3xl font-black">
          #lifeatreldyn
        </h1>
      </div>
      <div className="w-full mx-auto pb-8 md:pb-28">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={breakpoints}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay]}
        >
          {lifeAtReldynImages.map((image, index) => (
            <SwiperSlide key={uuidv4()} className="pl-16 md:pl-0">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  transform: `rotate(${Math.floor(Math.random() * 45)}deg)`,
                }}
                className="border-8 border-color-gray-blue mt-20"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default LifeAtReldyn;
