import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import PaymentIcon from "@mui/icons-material/Payment";
import PersonIcon from "@mui/icons-material/Person";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { motion } from "framer-motion";
import { SyntheticEvent, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import {
  Addresses,
  MenuToggle,
  Orders,
  PaymentMethod,
  ProfileInfo,
  Wishlist,
} from "../../components";
type Props = {};

export default function Profile({}: Props) {
  const [show, setShow] = useState(true);
  const toggle = () => {
    setShow((show) => !show);
  };
  const [navItem, setNavItem] = useState("orders");
  console.log(navItem);
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setNavItem(newValue);
  };

  return (
    <nav className="bg-light py-5">
      <TabContext value={navItem}>
        <div className="container">
          <div className="menu-icon">
            <MenuToggle toggle={toggle} show={show} />
          </div>

          <div className="row">
            <div className="col-xl-3">
              <motion.nav
                id="sidebarMenu"
                className="d-block sidebar"
                animate={show ? "open" : "closed"}
                variants={variants}
              >
                <div className="position-sticky sidebar-sticky">
                  <h1>dashboard</h1>
                  <TabList
                    orientation="vertical"
                    className="tab-list"
                    onChange={handleChange}
                    TabIndicatorProps={{
                      style: {
                        left: 0,
                        backgroundColor: "#d23f57",
                      },
                    }}
                    textColor="primary"
                    aria-label="lab API tabs example"
                  >
                    {route.map(({ id, label, value, icon: Icon }) => (
                      <Tab
                        sx={{
                          marginRight: "auto",
                          "&.Mui-selected": {
                            outline: "none",
                            //   borderLeft: "1px solid",
                            //   borderColor: "#d23f57",
                            color: "#d23f57",
                          },
                        }}
                        className="tab-btn"
                        key={id}
                        label={
                          <div>
                            <Icon />
                            <span>{label}</span>
                          </div>
                        }
                        value={value}
                      />
                    ))}
                  </TabList>
                </div>
              </motion.nav>
            </div>
            <div className="col-xl-9">
              <TabPanel value={"orders"} className="px-0">
                <Orders />
              </TabPanel>
              <TabPanel value={"wishlist"} className="px-0">
                <Wishlist />
              </TabPanel>
              <TabPanel value={"profile"} className="px-0">
                <ProfileInfo />
              </TabPanel>
              <TabPanel value={"address"} className="px-0">
                <Addresses />
              </TabPanel>
              <TabPanel value={"payment"} className="px-0">
                <PaymentMethod />
              </TabPanel>
            </div>
          </div>
        </div>
      </TabContext>
    </nav>
  );
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const route = [
  {
    id: 1,
    pathname: "/order",
    label: "Orders",
    value: "orders",
    icon: FiShoppingBag,
    count: "5",
  },
  {
    id: 2,
    pathname: "/wishlist",
    label: "Wishlist",
    value: "wishlist",
    icon: FavoriteBorderIcon,
    count: "5",
  },
  {
    id: 3,
    pathname: "/profile",
    label: "Profile Info",
    value: "profile",
    icon: PersonIcon,
    count: "",
  },
  {
    id: 4,
    pathname: "/address",
    label: "addresses",
    value: "address",
    icon: LocationOnIcon,
    count: "16",
  },
  {
    id: 5,
    pathname: "/payment-methods",
    label: "Payment Methods",
    value: "payment",
    icon: PaymentIcon,
    count: "5",
  },
];
