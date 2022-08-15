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
import jsonData from "../../pages/api/data.json";

import { FiShoppingBag } from "react-icons/fi";

export default function ShopDropCard() {
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

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

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
          <a className="nav-link  d-block">
            {open ? null : <span>1</span>}
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
                              textAlign: "center",
                              color: "white",
                              backgroundColor: "orangered",
                            },
                          }}
                        >
                          <strong>items</strong>
                          <Typography component={"h1"}>2</Typography>
                        </Box>
                      </Typography>
                    </CardContent>

                    <Divider />
                    {jsonData.products.slice(1, 5).map((data, index) => (
                      <>
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            padding: "10px 15px",
                            height: "60%",
                            width: "100%",
                            cursor: "pointer",
                            "&:hover": {
                              backgroundColor: "var(--light)",
                            },
                            gap: 2,
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
                            image={data.featuredAsset.preview}
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
                              <div
                                className="text-truncate"
                                style={{ maxWidth: "200px" }}
                              >
                                {data.name}
                              </div>
                              <Typography component={"h2"}>
                                ${data.variants[0].price}
                              </Typography>
                            </Typography>
                            <CancelIcon />
                          </Typography>
                        </Box>
                      </>
                    ))}
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "10px",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "var(--blue)" }}
                      >
                        view Cart
                      </Button>
                      <Button
                        endIcon={<HiOutlineArrowNarrowRight />}
                        variant="contained"
                        sx={{ backgroundColor: "var(--primary)" }}
                      >
                        Checkout
                      </Button>
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
