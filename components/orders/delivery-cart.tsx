import { Card, FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import Radio from "@mui/material/Radio";
type Props = {};

export default function DeliveryCart({}: Props) {
  return (
    <div>
      <Card className="delivery-info">
        <div className="section-title">
          <span>3</span>
          <strong>Delivery Method</strong>
        </div>

        <div>
          <p>Select a delivery method</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Home Delivery - 60৳"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Store Pickup - 0৳"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Card>
    </div>
  );
}
