/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import QuickView from "../quick-view/quick-view";

export default function ProductCard({ data }: any) {
  return (
    <>
      <div className="card-container">
        <figure>
          <div className="link">
            <Link
              href={`/product/[data.id]`}
              as={`/product/${data.id}`}
              passHref
            >
              <img
                className="w-100 h-100 product-image"
                src={data?.featuredAsset?.preview}
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
          <h3>{data?.name}</h3>
          {/* <div className="rating">
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </div> */}
          <h4 className="price">
            ${data.variants[0].price} <span>$299</span>
          </h4>
        </div>

        <div className="add-to-cart">
          <a className="add-to-btn">Add to Cart</a>
        </div>
      </div>
    </>
  );
}
