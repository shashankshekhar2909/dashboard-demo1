'use client';
import { Box, Typography } from '@mui/material';
import { ForecastItem as ForecastItemType } from '@/types';

interface Props {
  item: ForecastItemType;
}

export default function ForecastItem({ item }: Props) {
  return (
    <Box
      sx={{
        borderLeft: `4px solid ${item.positive ? '#4CAF50' : '#FF9800'}`,
        px: '20px',
        py: '12px',
        borderBottom: '1px solid #F0F4F8',
        cursor: 'pointer',
        transition: 'background 150ms ease',
        '&:hover': { bgcolor: '#F5F7FA' },
      }}
    >
      <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#1A2340', mb: '4px', lineHeight: 1.3 }}>
        {item.title}
      </Typography>
      <Typography sx={{ fontSize: '13px', color: '#6B7A99', lineHeight: 1.5 }}>
        {item.body}
      </Typography>
    </Box>
  );
}
