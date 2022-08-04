/* eslint-disable @next/next/no-img-element */
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {
  data: any[] | null;
};

export default function TopSlider({ data }: Props) {
  return (
    <div>
      <Swiper
        navigation={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        className="top-banner"
      >
        {data?.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="top-banner-img">
              <img className="img-fluid" src={img.img} alt="First slide" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
