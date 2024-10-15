import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <img src="/assets/banner.png" alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/banner2.png" alt="Banner 2" />
      </SwiperSlide>
    </Swiper>
  );
}
