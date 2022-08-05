import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { SyntheticEvent, useState } from "react";
import ProductDescription from "./product-description";
import ProductQuestion from "./product-question";
import ProductReviews from "./product-reviews";
import ProductSpecification from "./product-specification";

export default function ProductDetailsTabs() {
  const [category, setCategory] = useState("specification");
  console.log(category);
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setCategory(newValue);
  };

  return (
    <Box>
      <TabContext value={category}>
        <Box className="tabs-nav">
          <TabList
            className="nav"
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
            textColor="inherit"
            aria-label="lab API tabs example"
          >
            {cate.map((ctg) => (
              <Tab
                sx={{
                  "&.Mui-selected": {
                    outline: "none",
                    background: "#3749bb",
                    color: "white",
                  },
                }}
                className="tabs-btn"
                key={ctg.id}
                label={ctg.label}
                value={ctg.category}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel value="specification" className="px-0">
          <ProductSpecification />
        </TabPanel>
        <TabPanel value="description" className="px-0">
          <ProductDescription />
        </TabPanel>
        <TabPanel value="questions" className="px-0">
          <ProductQuestion />
        </TabPanel>
        <TabPanel value="reviews" className="px-0">
          <ProductReviews />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const classes = {
  mui: {
    root: {
      "&$selected": {
        backgroundColor: "white",

        border: "1px solid white",

        color: "#f57c00",

        "&:hover": {
          color: "#388e3c",
        },
      },
    },
  },
};
const cate = [
  {
    id: 1,
    category: "specification",
    label: "specification",
  },
  {
    id: 2,
    category: "description",
    label: "description",
  },
  {
    id: 3,
    category: "questions",
    label: "Questions",
  },
  {
    id: 4,
    category: "reviews",
    label: "Reviews",
  },
];
