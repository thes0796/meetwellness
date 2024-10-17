import { Box, Typography, Slide } from "@mui/material";
import { useState, useEffect } from "react";

export default function ClientDescription(props) {
  const [checked, setChecked] = useState(false);
  let items1 =
    "At meetwellness, we take pride in helping our clients achieve healthier, glowing skin through personalized care. Below are some of the amazing transformations our clients have experienced—proof that radiant skin is just one step away with the right care!";
  let items2 =
    "At meetwellness, we help individuals achieve healthy and sustainable weight gain through personalized nutrition and fitness plans. Below are the inspiring transformations of our clients who have successfully reached their weight gain goals with our guidance";
  let items3 =
    "Our weight loss programs at meetwellness are designed to promote long-term wellness and fitness. Check out the incredible journeys of our clients who have shed excess weight and embraced healthier lifestyles with our expert support.";
  var DescriptionAbout =
    props.cz === 1 ? items1 : props.cz === 2 ? items2 : items3;
  var About =
    props.cz === 1
      ? "Skin Improvement"
      : props.cz === 2
      ? "Weight Gain"
      : "Weight Loss";

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Slide direction="up" in={checked} timeout={800}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #e1f5fe 30%, #f1f8e9 100%)",
          borderRadius: "15px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          textAlign: "center",
          maxWidth: "900px",
          margin: "auto",
          mt: 6,
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: "2rem",
            color: "#00796b",
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Our Client Transformations for {About}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.6,
            color: "#555",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          {DescriptionAbout}
        </Typography>
      </Box>
    </Slide>
  );
}
