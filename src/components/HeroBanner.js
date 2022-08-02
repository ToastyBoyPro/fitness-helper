import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/hero.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '200px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="30px">Fitness Helper</Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '48px', xs: '40px' } }} mb="23px" mt="30px">
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="24px" fontFamily="Lora" lineHeight="35px">
        Find the best exercises for your workout!
      </Typography>
      <Stack> {/* 30:00 */}
        <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
      </Stack>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
