import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/icon2.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "127px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      mt="20px"
      textAlign="center"
      pb="40px"
      fontFamily="Josefin Sans"
    >
      Created by Toasty Boy Productions. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
