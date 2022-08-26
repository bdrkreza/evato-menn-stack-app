import { Box, CardMedia } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { useEffect } from "react";
import {
  MdClose,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { cartItem, removeFromCart } from "../../redux";
import {
  addToCart,
  decreaseCart,
  getTotals,
} from "../../redux/slices/cartSlice";
import { IProducts } from "../../types/product.type";

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function subtotal(items: readonly IProducts[]) {
  return items
    .map(({ price }) => parseInt(price))
    .reduce((sum, i) => sum + i, 0);
}

export default function CheckoutCart() {
  const dispatch = useDispatch();
  const cart = useSelector(cartItem);
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cart]);

  const invoiceSubtotal = subtotal(cart.cartItems);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product: any) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product: any) => {
    dispatch(removeFromCart(product));
  };
  // const handleClearCart = () => {
  //   dispatch(clearCart());
  // };
  return (
    <TableContainer className="table">
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">Image</TableCell>
            <TableCell className="table-cell">Product Name</TableCell>
            <TableCell className="table-cell">model</TableCell>
            <TableCell className="table-cell">Quantity</TableCell>
            <TableCell className="table-cell" align="right">
              Unit Price
            </TableCell>
            <TableCell className="table-cell" align="right">
              Sum
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cartItems?.map((data) => (
            <TableRow key={data._id}>
              <TableCell
                sx={{
                  maxWidth: "100px",
                  img: {
                    height: "20%",
                    width: "20%",
                    maxHeight: "60px",
                    minWidth: "90px",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={data.image}
                  alt="CardMedia Image Example"
                  title="CardMedia Image Example"
                />
              </TableCell>
              <TableCell className="t-link bg-gray w-25">
                <Link
                  href={{
                    pathname: `/product/${data._id}`,
                    query: { name: data.title },
                  }}
                >
                  <span
                    className="d-inline-block text-truncate title"
                    style={{ maxWidth: "350px" }}
                  >
                    {data.title}
                  </span>
                </Link>
              </TableCell>
              <TableCell sx={{ maxWidth: "150px" }}>
                {data.specifications[1].value}
              </TableCell>
              <TableCell align="right">
                <label className="quantity">
                  <span className="qty">
                    <input
                      type="text"
                      name="quantity"
                      id="input-quantity"
                      value={data.cartQuantity}
                    />
                  </span>
                  <div>
                    <span className="ctl" onClick={() => handleAddToCart(data)}>
                      <MdKeyboardArrowUp />
                    </span>
                    <span
                      className="ctl"
                      onClick={() => handleDecreaseCart(data)}
                    >
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </div>
                  <Box
                    sx={{
                      padding: "5px 8px",
                      border: "1px solid rgba(210, 63, 87, 0.5)",
                      borderRadius: 1,
                      color: "red",
                      cursor: "pointer",
                      marginLeft: 2,
                      svg: {
                        fontSize: "20px",
                      },
                      "&:hover": {
                        backgroundColor: "orangered",
                        color: "white",
                      },
                    }}
                    aria-label="share"
                    onClick={() => handleRemoveFromCart(data)}
                  >
                    <MdClose />
                  </Box>
                </label>
              </TableCell>
              <TableCell align="right">
                {ccyFormat(parseInt(data?.price))}৳
              </TableCell>
              <TableCell align="right">
                <strong>
                  {priceRow(data?.cartQuantity, parseInt(data?.price))}৳
                </strong>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} colSpan={3} />
            <TableCell className="td" colSpan={2}>
              Sub-total
            </TableCell>
            <TableCell align="right" className="td-price">
              {cart.cartTotalAmount}৳
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell className="td">Tax</TableCell>
            <TableCell align="right">
              {`${(TAX_RATE * 100).toFixed(0)} %`}
            </TableCell>
            <TableCell className="td-price" align="right">
              {ccyFormat(invoiceTaxes)}৳
            </TableCell>
          </TableRow> */}

          <TableRow>
            <TableCell className="td" colSpan={2}>
              Total
            </TableCell>
            <TableCell className="td-price" align="right">
              {cart.cartTotalAmount}৳
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
