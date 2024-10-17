import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function SocialMedia() {
  return (
    <Box sx={{ p: 4, m: 2, textAlign: "center", backgroundColor: "#e0f7fa" }}>
      <IconButton
        href="https://facebook.com"
        target="_blank"
        sx={{ "&:hover": { transform: "scale(1.1)", transition: "0.3s" } }}
      >
        <FacebookIcon fontSize="large" color="primary" />
      </IconButton>
      <IconButton
        href="https://twitter.com"
        target="_blank"
        sx={{ "&:hover": { transform: "scale(1.1)", transition: "0.3s" } }}
      >
        <TwitterIcon fontSize="large" color="primary" />
      </IconButton>
      <IconButton
        href="https://instagram.com"
        target="_blank"
        sx={{ "&:hover": { transform: "scale(1.1)", transition: "0.3s" } }}
      >
        <InstagramIcon fontSize="large" color="primary" />
      </IconButton>
    </Box>
  );
}
