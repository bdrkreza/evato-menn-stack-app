/* eslint-disable @next/next/no-img-element */

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { IProducts } from "../../types/product.type";
import ProductCard from "./prodeuct-card";
type Props = {
  products: Array<IProducts> | undefined;
};
export default function ProductCarousel({ products }: Props) {
  console.log("products is here", products);
  return (
    <>
      <div className="mt-3 product-carousel">
        <hr className="bg-danger border-2 border-top border-danger" />
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {products?.map((item) => {
            return (
              <SwiperSlide key={item._id} className="swiper">
                <ProductCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
