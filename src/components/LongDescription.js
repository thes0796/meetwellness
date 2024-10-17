import { Box, Typography, Divider, Fade } from "@mui/material";
import { useState, useEffect } from "react";

export default function LongDescription() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  return (
    <Fade in={loaded} timeout={1500}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #e0f7fa 30%, #f1f8e9 100%)",
          py: 8,
          px: 4,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f9fbe7",
            py: 4,
            mt: 6,
            boxShadow: "0px 8px 15px rgba(0,0,0,0.1)",
            borderRadius: 2,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: "1.8rem",
              color: "#4caf50",
              mb: 2,
            }}
          >
            Your Health, Our Priority
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              margin: "auto",
              fontSize: "1.2rem",
              color: "#555",
            }}
          >
            At meetwellness, we are driven by our mission to make quality health
            care accessible and affordable to all. From preventive screenings to
            advanced treatments, we have you covered every step of the way.
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}
