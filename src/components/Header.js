import { Box, Typography } from "@mui/material";
import backgroundImage from "../assets/me.png";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "50vh", md: "100%" },
          minHeight: "300px",
        }}
      />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to right, #4e54c8, #8f94fb)",
          color: "#fff",
          flexDirection: "column",
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
            textShadow: "1px 2px 4px rgba(0, 0, 0, 0.5)",
            fontSize: { xs: "1.8rem", sm: "2rem", md: "3rem" },
          }}
        >
          Welcome to Meet Your Wellness
        </Typography>
      </Box>
    </Box>
  );
}
