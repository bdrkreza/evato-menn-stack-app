import AssignmentIcon from "@mui/icons-material/Assignment";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
type Props = {};

export default function ProductReviews({}: Props) {
  return (
    <div>
      <Card className="card-section">
        <CardContent>
          <Box className="section-head">
            <Box className="title">
              <Typography component="h1">
                Review <span>(0)</span>
              </Typography>
              <Typography component={"h2"}>
                Get specific details about this product from customers who own
                it.
              </Typography>
            </Box>
            <Button variant="outlined" className="ask-btn">
              Ask Question
            </Button>
          </Box>
          <Box className="empty-content">
            <span>
              <AssignmentIcon />
            </span>
            <div className="empty-text">
              This product has no reviews yet. Be the first one to write a
              review.
            </div>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
