import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";
import { serviceCards } from "../../utils/data";
import { v4 as uuidv4 } from "uuid";

const ServiceItems = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        // scrollbar={{ draggable: false, hide: true }}
        // slidesPerView={1}
        loop={true}
        pagination={false}
        breakpoints={{
          // When window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {serviceCards.map((serviceCard) => (
          <SwiperSlide key={uuidv4()}>
            <Card
              id={serviceCard.id}
              serviceTitle={serviceCard.serviceTitle}
              serviceDescription={serviceCard.serviceDescription}
              serviceIcon={serviceCard.serviceIcon}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceItems;
