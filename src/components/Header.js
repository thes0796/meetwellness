import { Box, Typography } from "@mui/material";
import { Fade } from "@mui/material";
import { useEffect, useState } from "react";
import backgroundImage from "../assets/image.png";

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  return (
    <Fade in={loaded} timeout={1000}>
      <Box
        sx={{
          height: "60vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(3px)",
            zIndex: 1,
          }}
        />

        <Typography
          variant="h2"
          sx={{
            color: "white",
            zIndex: 2,
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "2px 4px 6px rgba(0, 0, 0, 0.7)",
            fontSize: { xs: "2rem", md: "3.5rem" },
            px: 2,
          }}
        >
          Welcome to Meet Your Wellness
        </Typography>
      </Box>
    </Fade>
  );
}
