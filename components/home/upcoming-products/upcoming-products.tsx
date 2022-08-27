import { IProducts } from "../../../types/product.type";
import ProductCarousel from "../../common/product-carousel";

type Props = {
  products: Array<IProducts> | undefined;
};

export default function UpcomingProducts({ products }: Props) {
  const product: Array<IProducts> | undefined = products?.filter(
    (item: IProducts) => item?.collection.toLowerCase() === "upcoming"
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
