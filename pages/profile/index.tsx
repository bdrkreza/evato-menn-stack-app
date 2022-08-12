import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonIcon from "@mui/icons-material/Person";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
type Props = {};

export default function Profile({}: Props) {
  const [navItem, setNavItem] = useState("orders");
  console.log(navItem);
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setNavItem(newValue);
  };

  return (
    <div className="bg-light py-5">
      <TabContext value={navItem}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sidebar">
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
            </div>
            <div className="col-md-9">
              <TabPanel value={"orders"} className="px-0">
                <h1>orders</h1>
              </TabPanel>
              <TabPanel value={"wishlist"} className="px-0">
                <h1>wishlist</h1>
              </TabPanel>
              <TabPanel value={"profile"} className="px-0">
                profile info
              </TabPanel>
              <TabPanel value={"address"} className="px-0">
                <h1>addresses</h1>
              </TabPanel>
              <TabPanel value={"payment"} className="px-0">
                <h1>payment</h1>
              </TabPanel>
            </div>
          </div>
        </div>
      </TabContext>
    </div>
  );
}

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
