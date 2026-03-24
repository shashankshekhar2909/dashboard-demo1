'use client';
import { Box, Typography } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { DeploymentAlertData } from '@/types';

interface Props {
  data: DeploymentAlertData;
}

export default function DeploymentAlert({ data }: Props) {
  return (
    <Box
      sx={{
        bgcolor: '#FFF8E1',
        borderLeft: '4px solid #FFB300',
        borderRadius: '8px',
        mx: '16px',
        my: '12px',
        p: '12px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '4px' }}>
        <WarningAmberIcon sx={{ fontSize: 16, color: '#F59E0B' }} />
        <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#7B5A00' }}>
          {data.country} — {data.issue}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: '12px', color: '#7B5A00', lineHeight: 1.5, mb: '6px' }}>
        {data.body}
      </Typography>
      <Typography
        component="span"
        sx={{ fontSize: '12px', fontWeight: 600, color: '#F59E0B', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
      >
        View Details →
      </Typography>
    </Box>
  );
}
