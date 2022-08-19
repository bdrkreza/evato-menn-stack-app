type Props = {};

export default function DiscountCard({}: Props) {
  return (
    <div>
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
