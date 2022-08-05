/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../pages/api/api";

type Props = {};

export default function ProductDetailsCarousel({}: Props) {
  const [activeThumb, setActiveThumb] = useState<any>(null);
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        className="product-images-slider"
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <img src={item?.img} alt="product images" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        onSwiper={setActiveThumb}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={item?.img} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
