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
        px: '20px',
        py: '10px',
        borderBottom: '1px solid #F0F4F8',
        cursor: 'pointer',
        transition: 'background 150ms ease',
        '&:hover': { bgcolor: '#F8FAFC' },
      }}
    >
      {/* Number badge */}
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

      {/* Content */}
      <Box sx={{ flex: 1 }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#1A2340', lineHeight: 1.3, mb: '2px' }}>
          {item.title}
        </Typography>
        <Typography sx={{ fontSize: '12px', color: '#6B7A99', lineHeight: 1.5 }}>
          {item.description}
        </Typography>
      </Box>

      {/* Arrow */}
      <NorthEastIcon sx={{ fontSize: 14, color: '#9AA3B8', flexShrink: 0, mt: '4px' }} />
    </Box>
  );
}
