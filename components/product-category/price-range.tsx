import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import * as React from "react";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function PriceRange() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="price-filter my-3">
      <div className="label">
        <span>Price Range</span>
      </div>
      <Box sx={{ height: "40px" }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <div className="range">
        <label className="range-label from">
          <input type="text" id="range-to" name="from" />
        </label>
        <label className="range-label from">
          <input type="text" id="range-to" name="from" />
        </label>
      </div>
    </div>
  );
}
