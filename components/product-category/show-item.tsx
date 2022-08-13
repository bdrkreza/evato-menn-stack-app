import { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

export default function ShowItems() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className="custom-show">
      <label>Show: </label>
      <select defaultValue="" className="form-select" aria-label="default">
        <option>10</option>
        <option value="1">20</option>
        <option value="2">30</option>
        <option value="3">40</option>
      </select>
    </div>
  );
}
