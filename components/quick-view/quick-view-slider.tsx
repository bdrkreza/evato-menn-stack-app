/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../pages/api/api";

type Props = {};
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
export default function QuickViewSlider({}: Props) {
  const [activeThumb, setActiveThumb] = useState<any>(null);
  return (
    <div>
      <Swiper
        speed={1000}
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
            <motion.img
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              key={item.img}
              src={item?.img}
              alt="product images"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={3}
        slidesPerView={4}
        onSwiper={setActiveThumb}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className="product-images-slider-thumbs-wrapper">
              <motion.img
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0.8, y: 10 }}
                key={item.img}
                whileTap={{ scale: 0.9 }}
                loading="lazy"
                src={item?.img}
                alt="product images"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
