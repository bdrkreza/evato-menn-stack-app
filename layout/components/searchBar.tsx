/* eslint-disable @next/next/no-img-element */
import { Box, Button, Divider, InputBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsChatQuote, BsPerson, BsSearch } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import brandLogo from "../../assets/brandlogo/brandlogo.png";
type Props = {};

export default function SearchBar({}: Props) {
  const lazyRoot = useRef(null);
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light py-2 ">
        <div className="container">
          <div className="col-md-2 col-sm-3 col-md-2">
            <Link href="/" passHref>
              <a className="navbar-brand text-center">
                <Image
                  lazyRoot={lazyRoot}
                  src={brandLogo}
                  width="100"
                  height="30"
                  alt="image"
                />
              </a>
            </Link>
          </div>
          <div className="col-md-5">
            <>
              <Box
                sx={{
                  border: 1,
                  maxHeight: "50px",
                  borderRadius: 3,
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search her ......"
                  inputProps={{ "aria-label": "search ...." }}
                />
                <Button
                  type="submit"
                  sx={{ p: "10px", svg: { fontSize: "20px" } }}
                  aria-label="search"
                >
                  <BsSearch />
                </Button>
                <Divider sx={{ height: 20, m: 0.5 }} orientation="vertical" />
              </Box>
            </>
          </div>
          <div className="col-md-3">
            <div className="collapse navbar-collapse navbar-1">
              <ul className="navbar-nav">
                {/* Notification Section */}
                <div className="notification_menu">
                  <div className="btn-group">
                    <li className="nav-link nav_link top_icon">
                      <a href="#">
                        <AiOutlineBell />
                      </a>
                    </li>
                  </div>
                </div>

                {/* ChatSection */}
                <div>
                  <div className="btn-group">
                    <li className="nav-link nav_link top_icon">
                      <a href="#">
                        <BsChatQuote />
                      </a>
                    </li>
                  </div>
                </div>

                {/* userProfile section */}
                <li className="nav-ite">
                  <Link href={"/signin"} passHref>
                    <a className="nav-link  nav_link top_icon d-block">
                      <BsPerson />
                    </a>
                  </Link>
                </li>
                {/* <ShoppingCart /> */}
                <li className="nav-ite">
                  <a className="nav-link  nav_link top_icon d-block">
                    <CgShoppingBag />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
