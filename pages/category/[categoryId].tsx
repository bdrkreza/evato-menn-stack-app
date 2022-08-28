import { Grid } from "@mui/material";
import { CategoryBar, FilterPanel } from "../../components";
import { IProducts } from "../../types/product.type";

type Props = {
  products: Array<IProducts>;
};

export default function ProductCategory() {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 d-none d-xl-block">
            <FilterPanel />
          </div>
          <div className="col-xl-9 com-md-12">
            <CategoryBar />
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, md: 12 }}
            >
              {/* {product.map((item: any, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                  <ProductCart product={item} />
                </Grid>
              ))} */}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async (): Promise<any> => {
//   const { products } = await product;
//   return {
//     props: {
//       products: products,
//     },
//   };
// };
