/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { slider } from "../../../pages/api/api";
import TopSlider from "./top-slider";

export default function HeroBanner() {
  const [img, setImg] = useState<any>([]);

  useEffect(() => {
    setImg(slider);
  }, []);
  return (
    <div className="container">
      <div className="banner">
        {/* Top Carousel section */}
        <TopSlider data={img} />
        <div className="mt-3">
          {/* Shell carousel section */}
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 2,
              },
            }}
          >
            {img.map((img: any, index: any) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={img.id}>
                  <div className="banner-img">
                    <img src={img.img} alt="banner image" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
