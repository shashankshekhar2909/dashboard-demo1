'use client';
import { Box } from '@mui/material';

interface Props {
  value: number;
  color: string;
}

export default function ProgressBar({ value, color }: Props) {
  return (
    <Box
      sx={{
        height: '6px',
        borderRadius: '6px',
        bgcolor: '#E2E8F0',
        mt: '12px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: `${value}%`,
          bgcolor: color,
          borderRadius: '6px',
          transition: 'width 800ms ease',
        }}
      />
    </Box>
  );
}
