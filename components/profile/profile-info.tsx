import PersonIcon from "@mui/icons-material/Person";
import { Box, Typography } from "@mui/material";
type Props = {};

export default function ProfileInfo({}: Props) {
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
    </div>
  );
}
