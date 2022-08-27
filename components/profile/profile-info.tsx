/* eslint-disable @next/next/no-img-element */
import PersonIcon from "@mui/icons-material/Person";
import { Box, Card, Grid, Typography } from "@mui/material";
import { useGetUserQuery } from "../../redux";

type Props = {};

export default function ProfileInfo({}: Props) {
  const { data, error } = useGetUserQuery();
  console.log("data is user", data);
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
        <PersonIcon sx={{ height: "30px", width: "30px" }} />
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 700,
            lineHeight: 1,
            whiteSpace: "normal",
            color: "black",
          }}
        >
          My Profile
        </Typography>
      </Box>
      <Box>
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px 10px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <img
                    src="https://bazar-react.vercel.app/assets/images/faces/ralph.png"
                    alt="profile-image"
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "1.5",
                      whiteSpace: "normal",
                      color: "red",
                    }}
                  >
                    {data?.name}
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "1.5",
                    color: "#7D879C",
                    letterSpacing: "0.2em",
                  }}
                >
                  SILVER USER
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {orderBox.map((list) => (
                  <Card
                    key={list.id}
                    sx={{
                      padding: "12px 8px",
                      textAlign: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "18px" }}>
                      {list.count}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "1.5",
                        color: "#7D879C",
                        textTransform: "none",
                        whiteSpace: "normal",
                      }}
                    >
                      {list.title}
                    </Typography>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Card
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
            padding: "15px 20px",
            mt: 2,
            h1: {
              fontSize: "15px",
              lineHeight: "1.5",
              color: "#7D879C",
              textTransform: "none",
              whiteSpace: "normal",
            },
            span: {
              fontSize: "15px",
              lineHeight: "1.5",
              color: "#2B3445",
              fontWeight: 600,
              whiteSpace: "normal",
            },
          }}
        >
          <Typography component={"h1"}>
            first Name <br /> <span>rkreza</span>
          </Typography>
          <Typography component={"h1"}>
            last Name <br /> <span>Edwards</span>
          </Typography>
          <Typography component={"h1"}>
            email <br /> <span>{data?.email}</span>
          </Typography>
          <Typography component={"h1"}>
            phone <br /> <span>01789380336</span>
          </Typography>
          <Typography component={"h1"}>
            birth date <br /> <span>01-02-1993</span>
          </Typography>
        </Card>
      </Box>
    </div>
  );
}

const user = [
  {
    firstname: "Ralph",
    lastname: "Edwards",
    email: "rkreza@gmail.com",
    phone: "+1983649392983",
    bio: "01 jan 1970",
  },
];

const orderBox = [
  {
    id: 1,
    title: "All Orders",
    count: "16",
  },
  {
    id: 2,
    title: "awaiting Payment",
    count: "02",
  },
  {
    id: 3,
    title: "awaiting Shipment",
    count: "00",
  },
  {
    id: 4,
    title: "awaiting Delivery",
    count: "01",
  },
];
