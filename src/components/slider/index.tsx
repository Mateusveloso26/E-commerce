import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import BannerPrimario from "../../assets/bannerPrimario.png";
import BannerSec from "../../assets/bannerSec.png";

export function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide className="flex items-center justify-center">
        <img src={BannerPrimario} alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={BannerSec} alt="Banner 2" />
      </SwiperSlide>
    </Swiper>
  );
}
