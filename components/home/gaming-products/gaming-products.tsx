import { IProducts } from "../../../types/product.type";
import ProductCarousel from "../../common/product-carousel";

type Props = {
  products: Array<IProducts> | undefined;
};
export default function GamingProducts({ products }: Props) {
  const product: Array<IProducts> | undefined = products?.filter(
    (item: IProducts) => item?.collection.toLowerCase() === "gaming"
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
