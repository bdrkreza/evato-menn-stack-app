import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { IProducts } from "../../types/product.type";

type Props = {
  product: IProducts;
};
export default function ProductCart({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }} className="cart-container">
      <figure>
        <Link
          href={{
            pathname: `/product/${product._id}`,
            query: { name: product.title },
          }}
          passHref
        >
          <CardMedia
            component="img"
            height="180"
            image={product.image}
            alt="green iguana"
          />
        </Link>
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
      <CardContent>
        <Link
          href={{
            pathname: `/product/${product._id}`,
            query: { name: product.title },
          }}
          passHref
        >
          <Typography gutterBottom component="h1">
            BenQ GW2280 22 Eye-care Stylish Full HD LED Monitor
          </Typography>
        </Link>
        <div className="short-description">
          <ul>
            <li>Resolution: Full HD (1920x1080)</li>
            <li>Display: VA, 60Hz, 5ms</li>
            <li>Ports: HDMI, D-sub</li>
            <li>Features: Eye Care, Flicker Free</li>
          </ul>
        </div>
        <div className="p-item-price">
          <span className="price-new">15,000৳</span>
          <span className="price-old">15,200৳</span>
        </div>
      </CardContent>
      <CardActions>
        <div className="actions">
          <span className="st-btn btn-add-cart">
            <ShoppingCartIcon />
            <h6> Buy Now</h6>
          </span>
          {/* <Button
            startIcon={<LibraryAddIcon />}
            href="#text-buttons"
            className="btn-compare"
          >
            add to compare
          </Button> */}
        </div>
      </CardActions>
    </Card>
  );
}
