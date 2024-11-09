import {
  TextField,
  Button,
  Box,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    contactNumber: "",
    email: "",
    age: "",
    healthGoal: "",
    addiction: "",
    lifestyle: "",
    joinWhatsappGroup: false,
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact Number is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.healthGoal) newErrors.healthGoal = "Health Goal is required";
    if (!formData.addiction)
      newErrors.addiction = "Addiction status is required";
    if (!formData.lifestyle) newErrors.lifestyle = "Lifestyle is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const emailParams = {
      name: formData.name,
      city: formData.city,
      contactNumber: formData.contactNumber,
      email: formData.email || "Not provided",
      age: formData.age,
      healthGoal: formData.healthGoal,
      addiction: formData.addiction,
      lifestyle: formData.lifestyle,
      joinWhatsappGroup: formData.joinWhatsappGroup ? "Yes" : "No",
    };

    emailjs
      .send(
        "service_hlwwnyj",
        "template_yo0pjl6",
        emailParams,
        "AbFZGRWXiom57sp8U"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setOpenSnackbar(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      component="form"
      sx={{
        p: 4,
        maxWidth: "600px",
        margin: "auto",
        boxShadow: 3,
        borderRadius: 3,
        backgroundColor: "#fff",
      }}
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}
      >
        Ready to Transform Your Health? Let’s Get Started!
      </Typography>
      <Typography
        variant="p"
        component="div"
        sx={{ textAlign: "center", mb: 3 }}
      >
        Fill out the form below, and our team will connect with you to discuss
        how we can support your health journey. Your path to a healthier,
        happier you starts here!{" "}
      </Typography>

      <TextField
        name="name"
        label="Name"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        name="city"
        label="City"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.city}
        helperText={errors.city}
      />
      <TextField
        name="contactNumber"
        label="Contact Number"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.contactNumber}
        helperText={errors.contactNumber}
      />
      <TextField
        name="email"
        label="Email (Optional)"
        fullWidth
        margin="normal"
        onChange={handleChange}
      />
      <TextField
        name="age"
        label="Age"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.age}
        helperText={errors.age}
      />
      <TextField
        select
        label="What is your health goal?"
        name="healthGoal"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.healthGoal}
        helperText={errors.healthGoal}
      >
        <MenuItem value="Weight loss">Weight loss</MenuItem>
        <MenuItem value="Weight gain">Weight gain</MenuItem>
        <MenuItem value="Diabetes management">Diabetes management</MenuItem>
        <MenuItem value="BP/Cholesterol management">
          BP/Cholesterol management
        </MenuItem>
        <MenuItem value="Joint pain">Joint pain</MenuItem>
        <MenuItem value="Thyroid">Thyroid</MenuItem>
        <MenuItem value="Digestion issue">Digestion issue</MenuItem>
        <MenuItem value="PCOD/PCOS">PCOD/PCOS</MenuItem>
      </TextField>

      <TextField
        select
        label="Any Addiction?"
        name="addiction"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.addiction}
        helperText={errors.addiction}
      >
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
      </TextField>

      <TextField
        select
        label="Lifestyle"
        name="lifestyle"
        fullWidth
        margin="normal"
        onChange={handleChange}
        error={!!errors.lifestyle}
        helperText={errors.lifestyle}
      >
        <MenuItem value="Inactive">Inactive</MenuItem>
        <MenuItem value="Medium active">Medium active</MenuItem>
        <MenuItem value="Daily workout">Daily workout</MenuItem>
      </TextField>

      <FormControlLabel
        control={
          <Checkbox
            name="joinWhatsappGroup"
            checked={formData.joinWhatsappGroup}
            onChange={handleChange}
          />
        }
        label="Do you want to join health tips WhatsApp group?"
      />

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        fullWidth
        type="submit"
      >
        Submit
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        message="Form submitted successfully!"
      />
    </Box>
  );
}
