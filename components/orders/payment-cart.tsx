import { Card, FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import Radio from "@mui/material/Radio";
import Image from "next/image";

import img from "../../public/icons/card-logo.png";

type Props = {};

export default function PaymentCart({}: Props) {
  return (
    <div>
      <Card className="payment-info">
        <div className="section-title">
          <span>2</span>
          <strong>Payment Method</strong>
        </div>
        <div>
          <p>Select a payment method</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label=" Cash on Delivery"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="POS on Delivery"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Online Payment"
              />
            </RadioGroup>
          </FormControl>

          <div className="accepted-logo">
            <h5>We Accepted : </h5>
            <a href="#">
              <Image
                src={img}
                alt="Picture of the author"
                width={300}
                height={25}
              />
            </a>
            <div className="clear"></div>
          </div>
        </div>
      </Card>
    </div>
  );
}
