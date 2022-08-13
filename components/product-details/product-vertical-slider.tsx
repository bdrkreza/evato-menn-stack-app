import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../pages/api/api";

interface IProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

const ProductVerticalSlider: React.FC<any> = () => {
  const [slectedImage, setSelectedImage] = useState<string>(data[0].img);

  const handleChangeImage = (e: any) => {
    console.log(e);
    setSelectedImage(e.target.src);
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
          {data.map((image, i) => (
            <SwiperSlide key={i}>
              <motion.img
                whileTap={{ scale: 0.9 }}
                onClick={handleChangeImage}
                src={image.img}
                loading="lazy"
                className={`product-slider__images-image ${
                  image.img === slectedImage ? "active-slide" : ""
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
