/* eslint-disable @next/next/no-img-element */
import { Box, Button, Divider, InputBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useRef } from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import brandLogo from "../../assets/brandlogo/brandlogo.png";
import NotificationCard from "./notification-card";
import ShopDropCard from "./shop-drop-card";
import UserDropMenu from "./user-dropdown-menu";
type Props = {};

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export default function SearchBar({}: Props) {
  const { token } = parseCookies();
  const user = parseJwt(token);

  const lazyRoot = useRef(null);
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light py-2 search-bar ">
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
            <div className="collapse navbar-collapse navbar-1 nav-icon-btn">
              <ul className="navbar-nav">
                {/* Notification Section */}
                <li>
                  <NotificationCard />
                </li>

                {/* <ShoppingCart /> */}
                <li>
                  <ShopDropCard />
                </li>

                {/* userProfile section */}
                {token ? (
                  <UserDropMenu user={user} />
                ) : (
                  <li className="nav-item">
                    <Link href="signin">
                      <a className="nav-link  d-block">
                        <BsPerson />
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
