'use client';
import { Box, Typography } from '@mui/material';

interface Props {
  delta: string;
  positive: boolean;
  onDark?: boolean;
}

export default function DeltaBadge({ delta, positive, onDark = false }: Props) {
  const color = positive ? (onDark ? '#81c784' : '#027a48') : '#F44336';
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        ml: 1,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: '13px',
          fontWeight: 500,
          color,
        }}
      >
        {delta}
      </Typography>
    </Box>
  );
}
