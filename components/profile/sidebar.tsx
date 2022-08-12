import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";
type Props = {};

export default function Sidebar({}: Props) {
  const [navItem, setNavItem] = useState("orders");
  console.log(navItem);
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setNavItem(newValue);
  };
  return (
    <div>
      <TabContext value={navItem}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Box className="tab-box">
                <TabList
                  orientation="vertical"
                  className="na"
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: {
                      display: "none",
                    },
                  }}
                  textColor="primary"
                  aria-label="lab API tabs example"
                >
                  {route.map(({ id, label, value, icon: Icon }) => (
                    <Tab
                      sx={{
                        "&.Mui-selected": {
                          outline: "none",
                          borderLeft: "4px solid var(--primary)",
                          color: "#d23f57",
                        },
                      }}
                      className="tab"
                      key={id}
                      icon={<Icon />}
                      iconPosition="start"
                      label={label}
                      value={value}
                    />
                  ))}
                </TabList>
              </Box>
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
    icon: LocalMallIcon,
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
];
