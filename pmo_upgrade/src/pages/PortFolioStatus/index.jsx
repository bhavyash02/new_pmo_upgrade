import React from 'react';
import Dropdown from '../../components/molecules/Dropdown';
import MultipleStepForm from '../../components/molecules/MultiStepForm';
import { Box, Typography } from '@mui/material';

function PortFolioStatus() {
  return (
    <Box sx={{ margin: 5}}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, marginRight :150, marginBottom:10 }}>
        Add Portfolio Status For March 2025
      </Typography>

      <Box sx={{ display: 'flex', gap: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 500, marginBottom: 1, marginRight:40 }}>BU Head</Typography>
          <Dropdown />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 500, marginBottom: 1, marginRight:35 }}>Engagement Director</Typography>
          <Dropdown />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 500, marginBottom: 1, marginRight:35 }}>
            Delivery Director <span style={{ color: 'red' }}>*</span>
          </Typography>
          <Dropdown />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 500, marginBottom: 1, marginRight:35 }}>
            Delivery Manager <span style={{ color: 'red' }}>*</span>
          </Typography>
          <Dropdown />
        </Box>
      </Box>
      <Box sx={{marginTop:10}}><MultipleStepForm/></Box>
    </Box>
  );
}

export default PortFolioStatus;
