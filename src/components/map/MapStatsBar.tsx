'use client';
import { Box, Typography } from '@mui/material';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';

const stats = [
  { icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 18, color: '#A8B8D8' }} />, label: 'Active Deployment', value: '8' },
  { icon: <CreditCardOutlinedIcon sx={{ fontSize: 18, color: '#A8B8D8' }} />, label: 'Capital Deployment', value: '$383.0M' },
  { icon: <WarningAmberIcon sx={{ fontSize: 18, color: '#A8B8D8' }} />, label: 'High Alerts', value: '3' },
  { icon: <SyncOutlinedIcon sx={{ fontSize: 18, color: '#A8B8D8' }} />, label: 'Diversification', value: '62/100', progress: true },
];

export default function MapStatsBar() {
  return (
    <Box
      sx={{
        bgcolor: '#1B2A4A',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        px: '24px',
      }}
    >
      {stats.map((stat, i) => (
        <Box key={stat.label} sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {i > 0 && (
            <Box sx={{ width: '1px', height: '24px', bgcolor: '#3A4F7A', mr: '16px' }} />
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
            {stat.icon}
            <Box>
              <Typography sx={{ fontSize: '11px', color: '#A8B8D8', lineHeight: 1 }}>{stat.label}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mt: '2px' }}>
                <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1 }}>
                  {stat.value}
                </Typography>
                {stat.progress && (
                  <Box sx={{ width: '48px', height: '4px', borderRadius: '4px', bgcolor: 'rgba(255,255,255,0.2)', overflow: 'hidden' }}>
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
