import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import ClientDescription from "./ClientDescription";
import photo1 from "../assets/Skin Improvement/photo_2024-09-17_17-01-56.jpg";
import photo2 from "../assets/Skin Improvement/photo_2024-09-17_17-02-11.jpg";
import photo3 from "../assets/Skin Improvement/photo_2024-09-17_17-05-19.jpg";
import photo4 from "../assets/Skin Improvement/photo_2024-09-17_17-05-21.jpg";
import photo5 from "../assets/Skin Improvement/photo_2024-09-17_17-05-25.jpg";
import photo6 from "../assets/Skin Improvement/photo_2024-09-17_17-05-30.jpg";
import photo7 from "../assets/Skin Improvement/photo_2024-09-17_17-06-20.jpg";
import wg1 from "../assets/Weight Gain-20240917T151539Z-001/Weight Gain/photo_2024-09-17_17-01-44.jpg";
import wg2 from "../assets/Weight Gain-20240917T151539Z-001/Weight Gain/photo_2024-09-17_17-02-46.jpg";
import wg3 from "../assets/Weight Gain-20240917T151539Z-001/Weight Gain/photo_2024-09-17_17-04-24.jpg";
import wg4 from "../assets/Weight Gain-20240917T151539Z-001/Weight Gain/photo_2024-09-17_17-06-00.jpg";
import wl1 from "../assets/Weight Loss-20240917T151639Z-001/Weight Loss/photo_2024-09-17_17-01-52.jpg";
import wl2 from "../assets/Weight Loss-20240917T151639Z-001/Weight Loss/photo_2024-09-17_17-01-53.jpg";
import wl3 from "../assets/Weight Loss-20240917T151639Z-001/Weight Loss/photo_2024-09-17_17-01-55.jpg";
import wl4 from "../assets/Weight Loss-20240917T151639Z-001/Weight Loss/photo_2024-09-17_17-01-56.jpg";
import wl5 from "../assets/Weight Loss-20240917T151639Z-001/Weight Loss/photo_2024-09-17_17-02-01.jpg";
import wl6 from "../assets/Weight Loss-20240917T151639Z-001/Weight Loss/photo_2024-09-17_17-02-05.jpg";
import wl7 from "../assets/Weight Loss-20240917T151639Z-001/Weight Loss/photo_2024-09-17_17-02-12.jpg";
import wl8 from "../assets/Weight Loss-20240917T151639Z-001/Weight Loss/photo_2024-09-17_17-02-34.jpg";
import { CssBaseline } from "@mui/material";

const items1 = [
  { image: photo1, name: "Customer 1" },
  { image: photo2, name: "Customer 2" },
  { image: photo3, name: "Customer 3" },
  { image: photo4, name: "Customer 4" },
  { image: photo5, name: "Customer 5" },
  { image: photo6, name: "Customer 6" },
  { image: photo7, name: "Customer 7" },
];
const items2 = [
  { image: wg1, name: "Customer 1" },
  { image: wg2, name: "Customer 2" },
  { image: wg3, name: "Customer 3" },
  { image: wg4, name: "Customer 4" },
];
const items3 = [
  { image: wl1, name: "Customer 1" },
  { image: wl2, name: "Customer 2" },
  { image: wl3, name: "Customer 3" },
  { image: wl4, name: "Customer 4" },
  { image: wl5, name: "Customer 5" },
  { image: wl6, name: "Customer 6" },
  { image: wl7, name: "Customer 7" },
  { image: wl8, name: "Customer 8" },
];

export default function CustomerCarousel(props) {
  const items = props.cz === 1 ? items1 : props.cz === 2 ? items2 : items3;

  return (
    <>
      <CssBaseline />
      <ClientDescription cz={props.cz} />
      <Box sx={{ my: 6, p: 4 }}>
        <Carousel
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={true}
          sx={{ height: { xs: "300px", sm: "350px", md: "400px" } }}
        >
          {items.map((item, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{ height: "100%", position: "relative" }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Paper>
          ))}
        </Carousel>
      </Box>
    </>
  );
}
