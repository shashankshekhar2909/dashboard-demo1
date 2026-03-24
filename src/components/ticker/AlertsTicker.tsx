'use client';
import { Box, Typography } from '@mui/material';
import { useTicker } from '@/hooks/useTicker';
import { tickerItems } from '@/data/aiData';

export default function AlertsTicker() {
  const { containerRef, setPaused } = useTicker(40);

  const allItems = [...tickerItems, ...tickerItems]; // duplicate for seamless loop

  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        height: '44px',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        cursor: 'default',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
        ref={containerRef}
      >
        {allItems.map((item, i) => (
          <Box
            key={`${item.id}-${i}`}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              mr: '48px',
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: item.severity === 'high' ? '#F44336' : '#FF9800',
                flexShrink: 0,
              }}
            />
            <Typography sx={{ fontSize: '13px', fontWeight: 400, color: '#1A2340' }}>
              {item.text}
            </Typography>
            <Box
              sx={{
                bgcolor: '#F0F4F8',
                borderRadius: '20px',
                px: '8px',
                py: '2px',
                flexShrink: 0,
              }}
            >
              <Typography sx={{ fontSize: '11px', fontWeight: 500, color: '#6B7A99' }}>
                {item.region}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
