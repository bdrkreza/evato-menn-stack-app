import { AppBar, Button } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import CategoryDropdown from "./categoryDropdown";
type Props = {};

export default function ScrollTop({}: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <Fragment>
      {/* Navbar 1 */}
      <AppBar
        className={
          scrolled
            ? "navbar-sticky navbar navbar-expand-md navbar-2"
            : "navbar navbar-expand-md navbar-2"
        }
      >
        <div className="container">
          <ul className="navbar-nav navbar-nav-1">
            <div className="dropdown dropdown-box">
              <li className="nav-item">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaList />
                  <span>Catagories</span>
                  <FiChevronDown />
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <CategoryDropdown />
                </div>
              </li>
            </div>
          </ul>
          <ul className="navbar-nav mr-auto pl-5">
            {nav.map(({ label }, index) => (
              <div className="dropdown ml-4" key={index}>
                <Button className="btn-style">{label}</Button>
                {/* <DropdownMenu /> */}
              </div>
            ))}
          </ul>
        </div>
      </AppBar>
    </Fragment>
  );
}

const nav = [
  {
    label: "desktop",
    children: [
      {
        label: "Item AB",
        children: [],
      },
    ],
  },
  {
    label: "laptop",
    children: [
      {
        label: "Item BA",
        children: [],
      },
    ],
  },
  {
    label: "accessories",
    children: [
      {
        label: "Item BA",
        children: [],
      },
    ],
  },
  {
    label: "PC Component",
    children: [
      {
        label: "Item BA",
        children: [],
      },
    ],
  },
  {
    label: "monitor",
    children: [
      {
        label: "Item BA",
        children: [],
      },
    ],
  },
  {
    label: "ups/ips",
    children: [
      {
        label: "Item BA",
        children: [],
      },
    ],
  },
  {
    label: "Sound System",
    children: [
      {
        label: "Item BA",
        children: [],
      },
    ],
  },
];
