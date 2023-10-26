import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { companyLogos } from "../../utils/data";
import { v4 as uuidv4 } from "uuid";
import { Autoplay } from "swiper/modules";

const CompanySlider = () => {
  const slidesPerView = {
    // base: 1,
    sm: 2,
    md: 4,
    lg: 4,
  };

  const getSlidesPerView = () => {
    if (window.innerWidth >= 1024) {
      return slidesPerView.lg;
    } else if (window.innerWidth >= 768) {
      return slidesPerView.md;
    } else if (window.innerWidth <= 767) {
      return slidesPerView.sm;
    }
  };

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={getSlidesPerView()}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay]}
    >
      {companyLogos.map((company) => (
        <SwiperSlide key={uuidv4()}>
          <img
            src={company.companyImage}
            alt={company.companyImageName}
            className="w-32 h-12"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CompanySlider;
