import { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

export default function SortingCard() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className="custom-select">
      <label className="">Sort By: </label>
      <select
        defaultValue=""
        className="form-select"
        aria-label="Default select example"
      >
        <option>Default</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}
