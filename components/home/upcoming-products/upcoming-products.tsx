import { ProductItem } from "../../../contracts/product.type";
import ProductCarousel from "../../common/product-carousel";

type Props = {
  products: Array<ProductItem> | undefined;
};

export default function UpcomingProducts({ products }: Props) {
  const product: ProductItem[] | undefined = products?.filter(
    (item: ProductItem) => item?.category === "upcoming"
  );
  return (
    <>
      <div className="container my-5">
        <div className="section-title">
          <h4>
            upcoming Products <span className="px-2">top</span>
          </h4>
        </div>
        <div>
          <ProductCarousel products={product} />
        </div>
      </div>
    </>
  );
}
