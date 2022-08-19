import { Card } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function AddressForm() {
  return (
    <Card className="customer-info">
      <div className="section-title">
        <span>1</span>
        <strong>Customer Information</strong>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} xl={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            autoComplete="phone"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            autoComplete="email"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zone"
            name="zone"
            label="zone"
            fullWidth
            autoComplete="zone"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </Card>
  );
}
