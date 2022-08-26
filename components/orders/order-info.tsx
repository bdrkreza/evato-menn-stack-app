import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import { cartItem } from "../../redux";

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

export default function OrderInfo() {
  const { cartItems, cartTotalQuantity, cartTotalAmount } =
    useSelector(cartItem);
  return (
    <div className="order-info">
      <div className="section-title">
        <span>4</span>
        <strong>Order Overview</strong>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow sx={{}} className="bg-light">
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((items) => (
              <TableRow key={items._id}>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    "a:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Link
                    href={{
                      pathname: `/product/${items._id}`,
                      query: { name: items.title },
                    }}
                  >
                    {items.title}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <strong>
                    {parseInt(items.price).toFixed(0)}৳ x {items.cartQuantity}
                  </strong>
                </TableCell>
                <TableCell align="right">
                  <strong>
                    {priceRow(items.cartQuantity, parseInt(items?.price))}৳
                  </strong>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={2} />
              <TableCell
                sx={{
                  fontWeight: 600,
                  lineHeight: "30px",
                  fontFamily: "revert",
                  fontSize: "20px",
                }}
              >
                SubTotal
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: 600,
                  lineHeight: "30px",
                  fontFamily: "serif",
                  fontSize: "20px",
                  color: "red",
                }}
              >
                {ccyFormat(cartTotalAmount)}৳
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  lineHeight: "30px",
                  fontFamily: "revert",
                  fontSize: "20px",
                }}
              >
                Total
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: 600,
                  lineHeight: "30px",
                  fontFamily: "serif",
                  fontSize: "20px",
                  color: "red",
                }}
              >
                {ccyFormat(cartTotalAmount)}৳
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
