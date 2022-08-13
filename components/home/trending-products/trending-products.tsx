import { ProductItem } from "../../../contracts/product.type";
import ProductCarousel from "../../common/product-carousel";

type Props = {
  products: Array<ProductItem> | undefined;
};

export default function TrendingProducts({ products }: Props) {
  const product: ProductItem[] | undefined = products?.filter(
    (item: ProductItem) => item?.category === "trending"
  );
  console.log("trending product", product);
  return (
    <div className="container mt-5">
      <div className="trending">
        <h4 className="text-uppercase section-title">
          Trending <span className="px-2">HOT</span>
        </h4>
      </div>
      <div>
        <ProductCarousel products={product} />
      </div>
    </div>
  );
}
