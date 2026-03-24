'use client';
import { Box, Typography } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { PriorityItem as PriorityItemType } from '@/types';

interface Props {
  item: PriorityItemType;
}

export default function PriorityItem({ item }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        mx: '10px',
        mb: '8px',
        px: '12px',
        py: '10px',
        borderRadius: '10px',
        bgcolor: '#f5f7fb',
        cursor: 'pointer',
        transition: 'background 150ms ease',
        '&:hover': { bgcolor: '#eef3fb' },
      }}
    >
      <Box
        sx={{
          width: 20,
          height: 20,
          borderRadius: '50%',
          bgcolor: '#1B2A4A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          mt: '2px',
        }}
      >
        <Typography sx={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 600, lineHeight: 1 }}>
          {item.id}
        </Typography>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#2f3237', lineHeight: 1.3, mb: '2px' }}>
          {item.title}
        </Typography>
        <Typography sx={{ fontSize: '12px', color: '#8a93a3', lineHeight: 1.45 }}>
          {item.description}
        </Typography>
      </Box>

      <NorthEastIcon sx={{ fontSize: 18, color: '#6f7886', flexShrink: 0, mt: '4px' }} />
    </Box>
  );
}
