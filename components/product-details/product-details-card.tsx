import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarsIcon from "@mui/icons-material/Stars";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import ProductVerticalSlider from "./product-vertical-slider";

type Props = {};

export default function ProductDetailsCard({}: Props) {
  return (
    <Paper>
      <div className="container">
        <Card
          sx={{
            borderRadius: 5,
            margin: "0px 0px 20px 0px",
            maxHeight: "50px",
          }}
        >
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography sx={{ fontSize: 14 }}>Word of the Day</Typography>
            <Typography>well meaning and kindly</Typography>
          </CardContent>
        </Card>
        <Grid container spacing={5} columns={12}>
          <Grid item xs={12} md={5}>
            <ProductVerticalSlider />
          </Grid>
          <Grid item xs={12} md={7}>
            <div className="product-content">
              <div className="product-name">
                <h1> Logitech Signature M650 Wireless Mouses</h1>
              </div>
              <div className="product-info">
                <ul className="px-0">
                  <li>
                    price: <span>3,299 tk</span>
                  </li>
                  <li>
                    Regular price: <span>3,299 tk</span>
                  </li>
                  <li>
                    status: <span>In Stock</span>
                  </li>
                  <li>
                    Product code: <span>2266</span>
                  </li>
                  <li>
                    brand: <span>Logitech</span>{" "}
                  </li>
                </ul>
              </div>

              <div className="short-description">
                <h1>key Features</h1>
                <ul>
                  <li>Model: M650</li>
                  <li>Connectivity: 2.4 GHz RF, Bluetooth</li>
                  <li>DPI: 400 to 4000DPI</li>
                  <li>Wireless Range: 10m</li>
                  <li>Number of Buttons: 5 Buttons</li>
                  <li className="view-more" data-area="specification">
                    <span> View More Info</span>
                  </li>
                </ul>
              </div>

              <div className="stickers">
                <StarsIcon />
                <span className="points">25</span>
                <span className="text">Star Points</span>
              </div>

              <div className="payment-options">
                <h2>Payment Options</h2>
                <div className="product-price-options">
                  <label className="p-wrap cash-payment">
                    <input type="radio" name="enable_emi" value="0" />
                    <span className="price">3,299৳</span>
                    <div className="p-tag">Cash Discount Price</div>
                    <div className="price-fade">Online / Cash Payment</div>
                  </label>
                  <label className="p-wrap cash-payment">
                    <input type="radio" name="enable_emi" value="1" />
                    <span className="price">605৳/month</span>
                    <div className="p-tag">Regular Price: 3,629৳</div>
                    <div className="price-fade">
                      0% EMI for 6 Months(12 Months on Store)
                    </div>
                  </label>
                </div>
              </div>
              <div className="cart-option">
                <label className="quantity">
                  <span className="ctl">
                    <RemoveIcon />
                  </span>
                  <span className="qty">
                    <input
                      type="text"
                      name="quantity"
                      id="input-quantity"
                      value="1"
                    />
                  </span>
                  <span className="ctl">
                    <AddIcon />
                  </span>
                  <input type="hidden" name="product_id" value="22616" />
                </label>
                <Button
                  sx={{
                    "&.Mui-selected": {
                      outline: "none",
                    },
                  }}
                  id="button-cart"
                  className="btn submit-btn"
                  data-loading-text="Loading..."
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
