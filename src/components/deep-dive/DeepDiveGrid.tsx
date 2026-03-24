'use client';
import { Box } from '@mui/material';
import DeepDiveCard from './DeepDiveCard';
import { deepDiveCards } from '@/data/deepDiveData';

export default function DeepDiveGrid() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      }}
    >
      {deepDiveCards.map((card) => (
        <DeepDiveCard key={card.id} data={card} />
      ))}
    </Box>
  );
}
