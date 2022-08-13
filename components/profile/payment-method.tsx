import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PaymentIcon from "@mui/icons-material/Payment";
import { Box, Card, Grid, Typography } from "@mui/material";
type Props = {};

export default function PaymentMethod({}: Props) {
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
        <PaymentIcon sx={{ height: "30px", width: "30px" }} />
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 700,
            lineHeight: 1,
            whiteSpace: "normal",
            color: "black",
          }}
        >
          Payment Methods
        </Typography>
      </Box>
      <Box>
        {payment.map((pay) => (
          <Card key={pay.id} sx={{ mt: 2 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 15px",
                  }}
                >
                  <Typography sx={{ display: "flex", gap: 3 }}>
                    <img src={pay.img} alt="" />
                    {pay.name}
                  </Typography>
                  <Typography>{pay.card}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 15px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>{pay.date}</Typography>
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

const payment = [
  {
    id: 1,
    img: "https://bazar-react.vercel.app/assets/images/payment-methods/Amex.svg",
    name: "Ralf Edward",
    card: "1234 **** **** ****",
    date: "08/02/2022",
  },
  {
    id: 2,
    img: "https://bazar-react.vercel.app/assets/images/payment-methods/Mastercard.svg",
    name: "MasterCard",
    card: "1234 **** **** ****",
    date: "08/02/2022",
  },
  {
    id: 3,
    img: "https://bazar-react.vercel.app/assets/images/payment-methods/Amex.svg",
    name: "Ralf Edward",
    card: "1234 **** **** ****",
    date: "08/02/2022",
  },
  {
    id: 4,
    img: "https://bazar-react.vercel.app/assets/images/payment-methods/PayPal.svg",
    name: "pay Pal",
    card: "1234 **** **** ****",
    date: "08/02/2022",
  },
  {
    id: 5,
    img: "https://bazar-react.vercel.app/assets/images/payment-methods/Visa.svg",
    name: "visa Card",
    card: "1234 **** **** ****",
    date: "08/02/2022",
  },
];
