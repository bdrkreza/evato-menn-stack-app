/* eslint-disable @next/next/no-img-element */
import { Rating } from "@mui/material";
import { BsHeartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

export default function ProductCard({ data }: any) {
  return (
    <>
      <div className="card-container">
        <figure>
          <a href="#">
            <img
              className="w-100 h-100"
              src={data?.img}
              alt="Publication Image"
            />
          </a>

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
              <a href="#" title="Quick View">
                <i className="fa fa-search"></i>
                <FaSearch />
              </a>
            </li>
          </ul>
        </figure>

        <div className="card-content">
          <span className="category">T-shirt</span>
          <h3>
            <a href="#">{data?.name}</a>
          </h3>
          <div className="rating">
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </div>
          <h4 className="price">
            ${data?.price} <span>$299</span>
          </h4>
        </div>

        <div className="add-to-cart">
          <a className="add-to-btn">Add to Cart</a>
        </div>
      </div>
    </>
  );
}
