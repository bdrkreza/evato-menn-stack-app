import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Rating } from "@mui/material";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { FaSearch } from "react-icons/fa";
import QuickViewSlider from "./quick-view-slider";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "900px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export default function QuickView({ data }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span className="span" onClick={handleOpen} title="Quick View">
        <FaSearch />
      </span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <QuickViewSlider />
              </div>
              <div className="col-md-6">
                <div className="product-content">
                  <div className="product-name">
                    <h1> {data.name}</h1>
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

                  <div className="ml-5 mb-3">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
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
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
