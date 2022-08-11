import { Box, Card, Typography } from "@mui/material";
import ShowItems from "./show-item";
import SortingCard from "./sorting-card";

type Props = {};

export default function CategoryBar({}: Props) {
  return (
    <div className="my-4">
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "50px",
        }}
        className="px-3"
      >
        <Typography>Benq</Typography>
        <Box sx={{ display: "flex" }}>
          <ShowItems />
          <SortingCard />
        </Box>
      </Card>
    </div>
  );
}
