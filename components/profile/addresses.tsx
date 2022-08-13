import AddLocationIcon from "@mui/icons-material/AddLocation";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Card, Grid, Typography } from "@mui/material";
type Props = {};

export default function Addresses({}: Props) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "25px",
          color: "#D23F57",
          padding: "0px 5px 20px",
        }}
      >
        <AddLocationIcon sx={{ height: "30px", width: "30px" }} />
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 700,
            lineHeight: 1,
            whiteSpace: "normal",
            color: "black",
          }}
        >
          My Addresses
        </Typography>
      </Box>
      <Box>
        {address.map((addr) => (
          <Card key={addr.id} sx={{ mt: 2 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 15px",
                  }}
                >
                  <Typography>{addr.country}</Typography>
                  <Typography>{addr.address}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 15px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>{addr.phone}</Typography>
                  <Box sx={{ display: "flex", gap: 3 }}>
                    <EditIcon sx={{ cursor: "pointer", color: "green" }} />
                    <DeleteIcon
                      sx={{ cursor: "pointer", color: "var(--primary)" }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Box>
    </div>
  );
}

const address = [
  {
    id: 1,
    country: "Ralf edward",
    address: "777 Brockton Avenue, Abington MA 2351",
    phone: "+1927987987498",
  },
  {
    id: 2,
    country: "Ralf edward",
    address: "777 Brockton Avenue, Abington MA 2351",
    phone: "+1927987987498",
  },
  {
    id: 3,
    country: "Ralf edward",
    address: "777 Brockton Avenue, Abington MA 2351",
    phone: "+1927987987498",
  },
];
