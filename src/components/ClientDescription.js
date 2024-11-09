import { Box, Typography, Slide } from "@mui/material";
import { useState, useEffect } from "react";

export default function ClientDescription(props) {
  const [checked, setChecked] = useState(false);
  let items1 =
    "At Meet Your Wellness, we’re passionate about helping our clients achieve healthier, glowing skin. With our personalized approach, many have seen real improvements, boosting their confidence and enjoying a natural, radiant look. We’re here to make healthy skin care simple and effective for you.";
  let items2 =
    "At Meet Your Wellness, we’re dedicated to helping our clients achieve healthy and sustainable weight gain. Through our personalized plans, many have gained strength, boosted their energy, and felt more confident in their bodies. We make it simple to reach your goals in a healthy, balanced way.";
  let items3 =
    "At Meet Your Wellness, we’re proud to help our clients lose weight in a healthy, lasting way. With our personalized support, many people have improved their health, gained confidence, and now enjoy a better quality of life.";
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
