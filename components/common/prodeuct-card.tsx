/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux";
import { IProducts } from "../../types/product.type";

import QuickView from "../quick-view/quick-view";
type Props = {
  data: IProducts;
};

export default function ProductCard({ data }: Props) {
  const dispatch = useDispatch();
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <div className="card-container">
        <figure>
          <div className="link">
            <Link
              href={{
                pathname: `/product/${data._id}`,
                query: { name: data.title },
              }}
              passHref
            >
              <img
                className="w-100 h-100 product-image"
                src={data.image}
                alt="Publication Image"
              />
            </Link>
          </div>

          <ul>
            <li>
              <a href="#" title="Add to Favorite">
                <BsHeartFill />
              </a>
            </li>
            <li>
              <a href="#" title="Add to Compare">
                <FiRefreshCw />
              </a>
            </li>
            <li>
              <QuickView data={data} />
            </li>
          </ul>
        </figure>

        <div className="card-content">
          <span className="category">T-shirt</span>
          <h3 className="text-truncate" style={{ maxWidth: "200px" }}>
            {data?.title}
          </h3>
          {/* <div className="rating">
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </div> */}
          <h4 className="price">
            ${data.price} <span>{data.regular_price}</span>
          </h4>
        </div>

        <div className="add-to-cart">
          <a className="add-to-btn" onClick={() => handleAddToCart(data)}>
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
}
