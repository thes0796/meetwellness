import React from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const StatCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  backgroundColor: '#fff9e6',
  borderRadius: '15px',
  margin: '20px',
}));

const StatValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2.5rem',
  fontWeight: 'bold',
  animation: 'fadeIn 0.6s ease-in-out',
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1.2rem',
  animation: 'fadeIn 1s ease-in-out',
}));

const StatisticsSection = () => {
  const stats = [
    { label: 'Satisfied Clients', value: '10,000+' },
    { label: 'Weight Loss Achieved', value: '3 Lakh+ kg' },
    { label: 'Countries Served', value: '19+' },
    { label: 'Medications Reduced', value: '99%' },
    { label: 'Money-back Guarantee', value: '100%' },
  ];

  return (
    <Grid container spacing={4} justifyContent="center" style={{ padding: '40px 20px' }}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <StatCard>
            <CardContent>
              <StatValue variant="h4" align="center">
                {stat.value}
              </StatValue>
              <StatLabel variant="h6" align="center">
                {stat.label}
              </StatLabel>
            </CardContent>
          </StatCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatisticsSection;
