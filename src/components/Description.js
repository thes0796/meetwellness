import { Box, Typography, Fade } from "@mui/material";
import { useEffect, useState } from "react";

export default function Description() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Fade in={loaded} timeout={1500}>
      <Box sx={{ p: 4, textAlign: "center", backgroundColor: "#e8f5e9" }}>
        {" "}
        <Typography variant="h4" gutterBottom>
          Your Partner in Health and Wellness
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "800px", margin: "auto", lineHeight: 1.8 }}
        >
          At MeetWellness, we offer personalized health solutions to support
          your well-being. Our team is dedicated to guiding you toward a
          healthier lifestyle.
        </Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Our Services
        </Typography>
        <Box
          sx={{
            textAlign: "left",
            maxWidth: "800px",
            margin: "auto",
            lineHeight: 1.6,
          }}
        >
          <ul>
            <li>
              <strong>Weight Management</strong>: Personalized plans for weight
              loss, gain, or maintenance.
            </li>
            <li>
              <strong>Digestive Health</strong>: Solutions for gas, acidity, and
              constipation.
            </li>
            <li>
              <strong>Joint Health</strong>: Support for joint pain and
              stiffness.
            </li>
            <li>
              <strong>Skin Health</strong>: Tips for clear and healthy skin.
            </li>
            <li>
              <strong>Energy and Fitness</strong>: Boost energy and fitness with
              tailored advice.
            </li>
            <li>
              <strong>Thyroid Management</strong>: Support for thyroid
              conditions.
            </li>
            <li>
              <strong>PCOD/PCOS</strong>: Manage symptoms and promote balance.
            </li>
            <li>
              <strong>Diabetes Management</strong>: Control blood sugar through
              diet.
            </li>
            <li>
              <strong>Blood Pressure Management</strong>: Maintain healthy blood
              pressure.
            </li>
            <li>
              <strong>Cholesterol Management</strong>: Keep cholesterol levels
              in check.
            </li>
            <li>
              <strong>Sports Nutrition</strong>: Enhance performance with
              nutrition plans.
            </li>
            <li>
              <strong>Anti-Aging</strong>: Simple changes to help you feel
              younger.
            </li>
            <li>
              <strong>Heart Health</strong>: Promote heart health with good
              habits.
            </li>
          </ul>
        </Box>
      </Box>
    </Fade>
  );
}
