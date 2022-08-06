/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductItem } from "../../contracts/product.type";
import { data } from "../../pages/api/api";
import ProductCard from "./prodeuct-card";
type Props = {
  products: Array<ProductItem> | undefined;
};
export default function ProductCarousel({ products }: Props) {
  const [item, setItem] = useState<any[] | null>([]);

  useEffect(() => {
    setItem(data);
  }, []);
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
              <SwiperSlide key={item.id} className="swiper">
                <ProductCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
