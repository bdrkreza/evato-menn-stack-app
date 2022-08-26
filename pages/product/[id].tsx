import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";

import {
  ProductDetailsCard,
  ProductDetailsTabs,
  ProductRelated,
} from "../../components";
import { useGetProductQuery } from "../../redux";

export default function ProductDetails() {
  const { query } = useRouter();
  const id: any = query.id;
  const { data } = useGetProductQuery(id, {
    refetchOnFocus: true,
  });

  return (
    <div className="bg-light">
      <ProductDetailsCard product={data?.product} />
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

// export const getStaticPaths: GetStaticPaths = async () => {
//   const resp = await json.products;
//   const paths = resp.map((product: any) => ({
//     params: { id: product._id },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { id } = params as IParams;
//   const response = await json.products;

//   const products = response.filter((item) => item.id === id);
//   return {
//     props: {
//       product: products,
//     },
//   };
// };
