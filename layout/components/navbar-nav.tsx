import { Fragment, useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { ICategory } from "../../types/category.type";

import NestedMenu from "./nestedMenu";
type Props = {
  data: ICategory | undefined;
};

export default function Navbar_nav({ data }: Props) {
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
      <div
        className={
          scrolled
            ? "navbar-sticky navbar navbar-expand-md header-nav"
            : "navbar navbar-expand-md header-nav"
        }
      >
        <div className="container">
          <div className="nested-dropdown">
            <div className="dropdown">
              <div
                className="nested-btn dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                <FaList />
                <span>Catagories</span>
                {/* <TiArrowSortedDown /> */}
              </div>
              <NestedMenu data={data} />
            </div>
          </div>

          <ul className="navbar-nav mr-auto pl-2">
            {nav.map(({ label }, index) => (
              <div className="dropdown ml-4" key={index}>
                <li className="nav-link" color="inherit">
                  {label}
                </li>
                {/* <DropdownMenu /> */}
              </div>
            ))}
          </ul>
        </div>
      </div>
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
