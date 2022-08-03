/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../../pages/api/api";
import TrendingCard from "./trending-card";

export default function TrendingCarousel() {
  const [item, setItem] = useState<any[] | null>([]);

  useEffect(() => {
    setItem(data);
  }, []);
  return (
    <>
      <div className="mt-3 swiper-card">
        <hr className="bg-danger border-2 border-top border-danger" />
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          modules={[Navigation, Autoplay]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          {item?.map((item) => {
            return (
              <div className="trending-slider">
                <SwiperSlide key={item.id} className="swiper">
                  <TrendingCard data={item} />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
