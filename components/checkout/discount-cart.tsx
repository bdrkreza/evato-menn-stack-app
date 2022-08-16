import { Box, Typography } from "@mui/material";

type Props = {};

export default function DiscountCart({}: Props) {
  return (
    <div>
      <Box>
        <Typography className="c-title" component={"h2"}>
          What would you like to do next?
        </Typography>
        <Typography component={"p"}>
          Choose if you have a discount code or reward points you want to use or
          would like to estimate your delivery cost.
        </Typography>
      </Box>
      <div className="container page-section">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex">
              <input
                type="text"
                name="coupon"
                placeholder="Promo / Coupon Code"
                id="input-coupon"
                className="form-control"
              />

              <span className="input-group-btn">
                <input
                  type="button"
                  value="Apply Coupon"
                  id="button-coupon"
                  data-loading-text="Loading..."
                  className="btn st-outline"
                />
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <input
                type="text"
                name="voucher"
                value=""
                placeholder="Enter your gift voucher code here"
                id="input-voucher"
                className="form-control"
              />

              <span className="input-group-btn">
                <input
                  type="submit"
                  value={"Apply Voucher"}
                  id="button-voucher"
                  data-loading-text="Loading..."
                  className="btn st-outline"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
