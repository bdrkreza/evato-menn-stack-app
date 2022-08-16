import { Box, CardMedia } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import {
  MdClose,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { cartItem, removeFromCart } from "../../redux";

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

interface Row {
  desc: string;
  qty: number;
  unit: number;
  price: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function CheckoutCart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(cartItem);

  return (
    <TableContainer className="table">
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          {/* <TableRow>
            <TableCell align="center" colSpan={5}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow> */}
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
          {cartItems?.map((row) => (
            <TableRow key={row.id}>
              <TableCell
                sx={{
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
                  image={row.featuredAsset.preview}
                  alt="CardMedia Image Example"
                  title="CardMedia Image Example"
                />
              </TableCell>
              <TableCell className="t-link">
                <Link href={"/product-details"}>{row.name}</Link>
              </TableCell>
              <TableCell>product model</TableCell>
              <TableCell align="right">
                <label className="quantity">
                  <span className="qty">
                    <input
                      type="text"
                      name="quantity"
                      id="input-quantity"
                      value="1"
                    />
                  </span>
                  <div>
                    <span className="ctl">
                      <MdKeyboardArrowUp />
                    </span>
                    <span className="ctl">
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
                    onClick={() => dispatch(removeFromCart(row))}
                  >
                    <MdClose />
                  </Box>
                </label>
              </TableCell>
              <TableCell align="right">{row?.variants[0].price}৳</TableCell>
              <TableCell align="right">
                <strong>{ccyFormat(row.variants[0].price)}৳</strong>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} colSpan={3} />
            <TableCell className="td" colSpan={2}>
              Subtotal
            </TableCell>
            <TableCell align="right" className="td-price">
              {ccyFormat(invoiceSubtotal)}৳
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="td">Tax</TableCell>
            <TableCell align="right">
              {`${(TAX_RATE * 100).toFixed(0)} %`}
            </TableCell>
            <TableCell className="td-price" align="right">
              {ccyFormat(invoiceTaxes)}৳
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="td" colSpan={2}>
              Total
            </TableCell>
            <TableCell className="td-price" align="right">
              {ccyFormat(invoiceTotal)}৳
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
