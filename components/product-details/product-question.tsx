import TextsmsIcon from "@mui/icons-material/Textsms";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
type Props = {};

export default function ProductQuestion({}: Props) {
  return (
    <div>
      <Card className="card-section">
        <CardContent>
          <Box className="section-head">
            <Box className="title">
              <Typography component="h1">
                Questions <span>(0)</span>
              </Typography>
              <Typography component={"h2"}>
                Have question about this product? Get specific details about
                this product from expert.
              </Typography>
            </Box>
            <Button variant="outlined" className="ask-btn">
              Ask Question
            </Button>
          </Box>
          <Box className="empty-content">
            <span>
              <TextsmsIcon />
            </span>
            <div className="empty-text">
              There are no questions asked yet. Be the first one to ask a
              question.
            </div>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
