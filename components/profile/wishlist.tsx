import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ProductCard3 from "../common/product-card-3";
type Props = {};

export default function Wishlist({}: Props) {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#D23F57",
          padding: "0px 5px 20px",
        }}
      >
        <FavoriteIcon sx={{ height: "30px", width: "30px" }} />
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 700,
            lineHeight: 1,
            whiteSpace: "normal",
            color: "black",
          }}
        >
          My Wish List
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 1, md: 3 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard3 />
          </Grid>
        ))}
      </Grid>
      <Stack
        spacing={2}
        sx={{
          mt: 5,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
          count={10}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
}
