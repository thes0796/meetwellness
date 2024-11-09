import Carousel from "react-material-ui-carousel";
import { Paper, Box, CssBaseline } from "@mui/material";
import ClientDescription from "./ClientDescription";

const importAll = (requireContext) =>
  requireContext.keys().map(requireContext);

// Dynamically import images for each category
const skinImprovementImages = importAll(require.context("../assets/Testimony/Skin Improvement", false, /\.(jpg|jpeg|png)$/));
const weightGainImages = importAll(require.context("../assets/Testimony/Weight Gain", false, /\.(jpg|jpeg|png)$/));
const weightLossImages = importAll(require.context("../assets/Testimony/Weight Loss", false, /\.(jpg|jpeg|png)$/));

const items1 = skinImprovementImages.map((image, index) => ({ image, name: `Customer ${index + 1}` }));
const items2 = weightGainImages.map((image, index) => ({ image, name: `Customer ${index + 1}` }));
const items3 = weightLossImages.map((image, index) => ({ image, name: `Customer ${index + 1}` }));

export default function CustomerCarousel(props) {
  const items = props.cz === 1 ? items1 : props.cz === 2 ? items2 : items3;

  return (
    <>
      <CssBaseline />
      <ClientDescription cz={props.cz} />
      <Box
        sx={{
          my: 6,
          p: 4,
          maxWidth: { xs: "100%", sm: "80%", md: "60%", lg: "50%" },  // Controls max width at different breakpoints
          margin: "0 auto",  // Centers the carousel
        }}
      >
        <Carousel
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={true}
          sx={{
            aspectRatio: { xs: "4 / 3", sm: "16 / 9" },  // Adjust aspect ratio for smaller screens
            overflow: "hidden",
            borderRadius: "12px",
            height: { xs: "250px", sm: "300px", md: "350px", lg: "400px" },  // Adjust height across devices
          }}
        >
          {items.map((item, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                height: "100%",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Paper>
          ))}
        </Carousel>
      </Box>
    </>
  );
}
