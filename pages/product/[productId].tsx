import { Container, Grid } from "@mui/material";
import {
  ProductDetailsCard,
  ProductDetailsTabs,
  ProductRelated,
} from "../../components";
type Props = {};

export default function ProductDetails({}: Props) {
  return (
    <div className="bg-light">
      <ProductDetailsCard />
      <div className="mt-5">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <ProductDetailsTabs />
            </Grid>
            <Grid item xs={12} md={4}>
              <ProductRelated />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
