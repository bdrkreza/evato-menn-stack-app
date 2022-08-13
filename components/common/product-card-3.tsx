import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { Box, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Link from "next/link";
export default function ProductCard3() {
  return (
    <>
      <Card sx={{ maxWidth: "100%", borderRadius: "10px" }}>
        <CardHeader
          avatar={
            <Typography
              sx={{
                bgcolor: red[500],
                padding: "5px 10px",
                borderRadius: "5px",
                margin: "5px",
                color: "white",
                fontSize: "12px",
              }}
              aria-label="recipe"
            >
              5% off
            </Typography>
          }
          action={
            <FavoriteBorderIcon
              sx={{ cursor: "pointer", color: "rgba(0, 0, 0, 0.54)" }}
            />
          }
        />
        <CardMedia
          component="img"
          height="194"
          image="https://www.techlandbd.com/image/cache/wp/gj/Monitor/Huawei/Huawei%20Display/huawei-display-ips-monitor-1.jpg-550x550.webp"
          alt="Paella dish"
        />
        <CardContent sx={{ pt: 5 }}>
          <Link href={`/product/${0}`} as={`/product/${0}`} passHref>
            <Typography
              gutterBottom
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "25px",
                cursor: "pointer",
                "&:hover": {
                  color: "var(--primary)",
                  textDecoration: "underline",
                },
              }}
              component="h1"
            >
              BenQ GW2280 22 Eye-care Stylish Full HD LED Monitor
            </Typography>
          </Link>
          <Rating
            sx={{ pt: 1 }}
            name="text-feedback"
            value={3.5}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 15px",
          }}
        >
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Typography sx={{ fontWeight: 600, color: "rgb(210, 63, 87)" }}>
              $237.50
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                color: "rgb(125, 135, 156)",
              }}
            >
              <del>250.00</del>
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "5px 5px",
              border: "1px solid rgba(210, 63, 87, 0.5)",
              borderRadius: 1,
              color: "red",
              cursor: "pointer",
            }}
            aria-label="share"
          >
            <AddIcon sx={{ fontSize: "28px" }} />
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
