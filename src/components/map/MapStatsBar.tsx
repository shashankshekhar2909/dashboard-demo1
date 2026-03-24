'use client';
import { Box, Typography } from '@mui/material';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';

const stats = [
  { icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.72)' }} />, label: 'Active Deployment', value: '8' },
  { icon: <CreditCardOutlinedIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.72)' }} />, label: 'Capital Deployment', value: '$383.0M' },
  { icon: <WarningAmberIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.72)' }} />, label: 'High Alerts', value: '3' },
  { icon: <SyncOutlinedIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.72)' }} />, label: 'Diversification', value: '62/100', progress: true },
];

export default function MapStatsBar() {
  return (
    <Box
      sx={{
        bgcolor: '#5b78b0',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        px: '18px',
      }}
    >
      {stats.map((stat, i) => (
        <Box key={stat.label} sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {i > 0 && (
            <Box sx={{ width: '1px', height: '14px', bgcolor: 'rgba(255,255,255,0.35)', mr: '14px' }} />
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
            {stat.icon}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Typography sx={{ fontSize: '10px', color: 'rgba(255,255,255,0.82)', lineHeight: 1 }}>
                  {stat.label}
                </Typography>
                <Typography sx={{ fontSize: '10px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1 }}>
                  {stat.value}
                </Typography>
                {stat.progress && (
                  <Box sx={{ width: '28px', height: '3px', borderRadius: '4px', bgcolor: 'rgba(255,255,255,0.2)', overflow: 'hidden' }}>
                    <Box sx={{ width: '62%', height: '100%', bgcolor: '#4CAF50', borderRadius: '4px' }} />
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
