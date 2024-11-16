import Carousel from "react-material-ui-carousel";
import { Paper, Box, CssBaseline } from "@mui/material";
import ClientDescription from "./ClientDescription";

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const skinImprovementImages = importAll(
  require.context(
    "../assets/Testimony/Skin Improvement",
    false,
    /\.(jpg|jpeg|png)$/
  )
);
const weightGainImages = importAll(
  require.context("../assets/Testimony/Weight Gain", false, /\.(jpg|jpeg|png)$/)
);
const weightLossImages = importAll(
  require.context("../assets/Testimony/Weight Loss", false, /\.(jpg|jpeg|png)$/)
);

const items1 = skinImprovementImages.map((image, index) => ({
  image,
  name: `Customer ${index + 1}`,
}));
const items2 = weightGainImages.map((image, index) => ({
  image,
  name: `Customer ${index + 1}`,
}));
const items3 = weightLossImages.map((image, index) => ({
  image,
  name: `Customer ${index + 1}`,
}));

export default function CustomerCarousel(props) {
  const items = props.cz === 1 ? items1 : props.cz === 2 ? items2 : items3;

  return (
    <>
      <CssBaseline />
      <ClientDescription cz={props.cz} />
      <Box
        sx={{
          my: 6,
          p: 0,
          maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          margin: "0 auto",
        }}
      >
        <Carousel
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={true}
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
                height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                width: "100%",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  maxHeight: "100%",
                }}
              />
            </Paper>
          ))}
        </Carousel>
      </Box>
    </>
  );
}
