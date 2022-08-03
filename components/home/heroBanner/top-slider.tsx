/* eslint-disable @next/next/no-img-element */
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {
  data: any[] | null;
};

export default function TopSlider({ data }: Props) {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data?.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-img">
              <img className="img-fluid" src={img.img} alt="First slide" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
