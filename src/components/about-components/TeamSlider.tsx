import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { teamMembers } from "../../utils/data";
import { v4 as uuidv4 } from "uuid";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import linkedinLogo from "../../assets/LinkedInLogo.png";

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
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay]}
    >
      {teamMembers.map((member) => (
        <SwiperSlide key={uuidv4()} className="relative">
          <img src={member.image} className="w-96 lg:h-96 rounded-2xl" />
          <h1 className="font-roboto font-bold absolute bottom-10 left-4 text-color-white lg:bottom-16 text-1xl lg:text-2xl">
            {member.name}
          </h1>
          <p className="font-roboto text-sm text-color-white absolute bottom-6 left-4 lg:text-base lg:bottom-10">
            {member.position}
          </p>
          <Link to={member.linkedInLink}>
            <img
              src={linkedinLogo}
              className="w-16 lg:w-20 absolute bottom-2 lg:bottom-4 left-4"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CompanySlider;
