import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type TImage = {
  url: string | undefined;
};

interface IProps {
  images: TImage[] | undefined;
}

const ProductVerticalSlider = ({ images }: IProps) => {
  const [slectedImage, setSelectedImage] = useState();

  const handleChangeImage = (e: any) => {
    setSelectedImage(e.target?.src);
  };
  return (
    <div className="product-slider">
      <motion.img
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0.8, y: 10 }}
        key={slectedImage}
        className="product-slider__main-image"
        src={slectedImage}
        alt=""
      />
      <div className="product-slider__images">
        <Swiper
          direction="horizontal"
          breakpoints={{
            990: { direction: "vertical", spaceBetween: 10, slidesPerView: 3 },
            480: {
              direction: "horizontal",
              spaceBetween: 10,
              slidesPerView: 3,
            },
          }}
          spaceBetween={3}
          slidesPerView={3}
        >
          {images?.map((image: TImage, index: number) => (
            <SwiperSlide key={index}>
              <motion.img
                whileTap={{ scale: 0.9 }}
                onClick={handleChangeImage}
                src={image?.url}
                loading="lazy"
                className={`product-slider__images-image ${
                  image.url === slectedImage ? "active-slide" : ""
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductVerticalSlider;
