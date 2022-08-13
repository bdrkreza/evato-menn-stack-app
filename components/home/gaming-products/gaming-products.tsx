import { ProductItem } from "../../../contracts/product.type";
import ProductCarousel from "../../common/product-carousel";

type Props = {
  products: Array<ProductItem> | undefined;
};
export default function GamingProducts({ products }: Props) {
  const product: ProductItem[] | undefined = products?.filter(
    (item: ProductItem) => item?.category === "gaming"
  );
  return (
    <div>
      <div className="container mt-5">
        <div className="section-title">
          <h4>
            Gaming Products <span className="px-2">HOT</span>
          </h4>
        </div>
        <div>
          <ProductCarousel products={product} />
        </div>
      </div>
    </div>
  );
}
