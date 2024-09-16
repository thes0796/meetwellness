// src/components/Form.js
import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    country: '',
    phone: '',
    email: '',
    weight: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const mailto = `mailto:your-email@example.com?subject=New Form Submission&body=${JSON.stringify(formData)}`;
    window.location.href = mailto;
  };

  return (
    <Box component="form" sx={{ p: 4, maxWidth: '600px', margin: 'auto', boxShadow: 3, borderRadius: 3, backgroundColor: '#fff' }}>
      <TextField name="firstName" label="First Name" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="lastName" label="Last Name" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="address" label="Address" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="city" label="City" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="state" label="State" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="country" label="Country" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="phone" label="Phone" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="email" label="Email" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="weight" label="Current Weight" fullWidth margin="normal" onChange={handleChange} />
      <Button variant="contained" color="primary" sx={{ mt: 2 }} fullWidth onClick={handleSubmit}>Submit</Button>
    </Box>
  );
}
