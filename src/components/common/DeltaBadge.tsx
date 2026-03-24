'use client';
import { Box, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

interface Props {
  delta: string;
  positive: boolean;
  onDark?: boolean;
}

export default function DeltaBadge({ delta, positive, onDark = false }: Props) {
  const color = positive ? (onDark ? '#81c784' : '#027a48') : '#F44336';
  const Icon = positive ? TrendingUpIcon : TrendingDownIcon;

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        ml: 1,
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontSize: '13px', fontWeight: 500, color }}
      >
        {delta}
      </Typography>
      <Icon sx={{ fontSize: 12, color, flexShrink: 0 }} />
    </Box>
  );
}
