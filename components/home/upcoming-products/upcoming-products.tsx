import ProductCarousel from "../../common/product-carousel";

type Props = {};

export default function UpcomingProducts({}: Props) {
  return (
    <div>
      <div className="container mt-5">
        <div className="section-title">
          <h4>
            upcoming Products <span className="px-2">top</span>
          </h4>
        </div>
        <div>
          <ProductCarousel />
        </div>
      </div>
    </div>
  );
}
