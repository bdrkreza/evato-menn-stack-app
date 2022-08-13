/* eslint-disable @next/next/no-img-element */
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { Box, Button, Card, Typography } from "@mui/material";
import Link from "next/link";
import { data } from "../../pages/api/api";

type Props = {};

export default function ProductRelated({}: Props) {
  return (
    <div>
      <Card className="product-related-card">
        <Typography component={"h1"}>Related Product</Typography>
        {data.slice(0, 5).map((item) => (
          <div className="p-s-item" key={item.id}>
            <Box className="image-holder">
              <img src={item.img} alt="image" />
            </Box>
            <div className="caption">
              <Link href="#" passHref>
                <Typography component={"h2"}> {item.name}</Typography>
              </Link>
              <Typography component={"h3"}>{item.price}$</Typography>

              <Button
                startIcon={<LibraryAddIcon />}
                href="#text-buttons"
                className="btn-compare"
              >
                add to compare
              </Button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
