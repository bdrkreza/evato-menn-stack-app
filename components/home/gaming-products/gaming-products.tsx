import ProductCarousel from "../../common/product-carousel";

type Props = {};

export default function GamingProducts({}: Props) {
  return (
    <div>
      <div className="container mt-5">
        <div className="section-title">
          <h4>
            Gaming Products <span className="px-2">HOT</span>
          </h4>
        </div>
        <div>
          <ProductCarousel />
        </div>
      </div>
    </div>
  );
}
