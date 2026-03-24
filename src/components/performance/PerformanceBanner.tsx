'use client';
import { Box, Typography } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function PerformanceBanner() {
  return (
    <Box sx={{ display: 'flex', gap: '16px' }}>

      {/* Best Performer */}
      <Box
        sx={{
          flex: 1,
          bgcolor: '#FFFFFF',
          borderRadius: '12px',
          p: '20px',
          borderLeft: '4px solid #4CAF50',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          transition: 'box-shadow 200ms ease, transform 200ms ease',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
            transform: 'translateY(-2px)',
          },
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '10px',
            bgcolor: 'rgba(76,175,80,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <EmojiEventsOutlinedIcon sx={{ fontSize: 24, color: '#4CAF50' }} />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Best Performer
          </Typography>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#1A2340', mt: '2px', lineHeight: 1.2 }}>
            Kenya — Solar-Powered Well Network
          </Typography>
        </Box>

        <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#4CAF50', flexShrink: 0 }}>
          +15.6% ▲
        </Typography>
      </Box>

      {/* Needs Attention */}
      <Box
        sx={{
          flex: 1,
          bgcolor: '#FFFFFF',
          borderRadius: '12px',
          p: '20px',
          borderLeft: '4px solid #F44336',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          transition: 'box-shadow 200ms ease, transform 200ms ease',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
            transform: 'translateY(-2px)',
          },
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '10px',
            bgcolor: 'rgba(244,67,54,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <WarningAmberIcon sx={{ fontSize: 24, color: '#F44336' }} />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#6B7A99', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Needs Attention
          </Typography>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#1A2340', mt: '2px', lineHeight: 1.2 }}>
            Mozambique — Coastal Desalination Pilot
          </Typography>
        </Box>

        <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#F44336', flexShrink: 0 }}>
          -50.6% ▼
        </Typography>
      </Box>

    </Box>
  );
}
