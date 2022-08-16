import { Box, Button, Card } from "@mui/material";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { CheckoutCart, DiscountCart } from "../../components";

type Props = {};

export default function Checkout({}: Props) {
  return (
    <div className="bg-light py-5">
      <Card className="container checkout-cart">
        <h1>shopping Cart</h1>
        <CheckoutCart />
        <DiscountCart />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px 10px",
            mt: 2,
          }}
        >
          <Link href={"/"}>
            <Button
              startIcon={<HiOutlineArrowNarrowLeft />}
              variant="outlined"
              className="shop-btn"
            >
              Continue Shopping
            </Button>
          </Link>
          <Link href={"/order"}>
            <Button variant="outlined" className="shop-btn">
              Confirm Order
            </Button>
          </Link>
        </Box>
      </Card>
    </div>
  );
}
