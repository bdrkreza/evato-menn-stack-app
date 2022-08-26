import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { cartItem, removeFromCart } from "../../redux";
import { getTotals } from "../../redux/slices/cartSlice";

export default function ShopDropCard() {
  const dispatch = useDispatch();
  const product = useSelector(cartItem);

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, product]);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ position: "relative" }}>
        <Box
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <a className="nav-link">
            {open ? null : <span>{product?.cartTotalQuantity}</span>}
            <FiShoppingBag />
          </a>
        </Box>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          sx={{ zIndex: 9, width: "100%" }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper
                sx={{
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 3,
                  width: 400,
                  marginLeft: -44,

                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 20,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <Card className="shop-card">
                    <CardContent>
                      <Typography className="text-head">
                        <strong>view card</strong>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            strong: {
                              textTransform: "uppercase",
                              fontSize: "13px",
                              fontWeight: 600,
                            },
                            h1: {
                              height: "21px",
                              width: "21px",
                              fontSize: "14px",
                              borderRadius: "100%",
                              lineHeight: "18px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "white",
                              backgroundColor: "orangered",
                            },
                          }}
                        >
                          <strong>items</strong>
                          <Typography component={"h1"}>
                            {product?.cartTotalQuantity}
                          </Typography>
                        </Box>
                      </Typography>
                    </CardContent>

                    <Divider />
                    {product?.cartTotalQuantity === 0 ? (
                      <Typography
                        sx={{
                          textAlign: "center",
                          padding: "20px",
                          fontSize: "20px",
                          fontWeight: 600,
                          lineHeight: "30px",
                          whiteSpace: "20px",
                        }}
                      >
                        Your cart is Currently empty
                      </Typography>
                    ) : (
                      product.cartItems.map((data, index) => (
                        <>
                          <Box
                            key={index}
                            className="my-2"
                            sx={{
                              display: "flex",
                              padding: "0px 10px",
                              height: "80px",
                              width: "100%",
                              cursor: "pointer",

                              "&:hover": {
                                backgroundColor: "var(--light)",
                                span: {
                                  textDecoration: "underline",
                                  color: "orange",
                                },
                              },
                              gap: 2,
                              img: {
                                height: "100%",
                                width: "20%",
                                minWidth: "90px",
                              },
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={data.image}
                              alt="Paella dish"
                            />
                            <Typography
                              component={"div"}
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                h1: {
                                  fontSize: "14px",
                                  fontWeight: 600,
                                },
                                h2: {
                                  fontSize: "13px",
                                  fontWeight: 500,
                                  lineHeight: "20px",
                                  whiteSpace: "20px",
                                },
                              }}
                            >
                              <Typography component={"h1"}>
                                <Link
                                  href={{
                                    pathname: `/product/${data._id}`,
                                    query: { name: data.title },
                                  }}
                                >
                                  <span
                                    className="d-inline-block text-truncate title"
                                    style={{ maxWidth: "200px" }}
                                  >
                                    {data.title}
                                  </span>
                                </Link>
                                <Typography component={"h2"}>
                                  {data.cartQuantity}x {data.price}৳
                                </Typography>
                              </Typography>
                              <Box
                                sx={{
                                  svg: {
                                    height: "30px",
                                    width: "30px",
                                    color: "var(--primary)",
                                  },
                                }}
                              >
                                <CancelIcon
                                  onClick={() => dispatch(removeFromCart(data))}
                                />
                              </Box>
                            </Typography>
                          </Box>
                        </>
                      ))
                    )}
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "10px",
                      }}
                    >
                      <Link href={"/checkout"}>
                        <Button
                          onClick={handleClose}
                          variant="outlined"
                          sx={{
                            backgroundColor: "var(--blue)",
                            color: "white",
                            "&:hover": {
                              color: "black",
                            },
                          }}
                        >
                          view Cart
                        </Button>
                      </Link>
                      <Link href={"/checkout/order"} passHref>
                        <Button
                          onClick={handleClose}
                          endIcon={<HiOutlineArrowNarrowRight />}
                          variant="outlined"
                          sx={{
                            backgroundColor: "var(--primary)",
                            color: "white",
                          }}
                        >
                          confirm order
                        </Button>
                      </Link>
                    </Box>
                  </Card>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Stack>
    </div>
  );
}
