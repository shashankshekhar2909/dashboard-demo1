'use client';
import { useState } from 'react';
import { Box, TextField, IconButton, Avatar, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Box
      sx={{
        height: '66px',
        bgcolor: '#2F446A',
        display: 'flex',
        alignItems: 'center',
        px: '18px',
        gap: '16px',
        flexShrink: 0,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
        <IconButton
          size="small"
          onClick={() => setSearchOpen((open) => !open)}
          sx={{ color: '#A8B8D8', '&:hover': { color: '#FFFFFF' } }}
        >
          <SearchIcon sx={{ fontSize: 20 }} />
        </IconButton>

        {searchOpen && (
          <TextField
            autoFocus
            size="small"
            placeholder="Search…"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#A8B8D8', fontSize: 18 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              width: '250px',
              '& .MuiOutlinedInput-root': {
                height: 38,
                bgcolor: 'rgba(255,255,255,0.06)',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '13px',
                '& fieldset': { borderColor: 'transparent' },
                '&:hover fieldset': { borderColor: 'transparent' },
                '&.Mui-focused fieldset': { borderColor: 'transparent' },
              },
              '& input::placeholder': { color: '#A8B8D8', opacity: 1 },
            }}
          />
        )}
      </Box>

      <Box sx={{ flex: 1 }} />

      <IconButton size="small" sx={{ color: '#A8B8D8', '&:hover': { color: '#FFFFFF' } }}>
        <DarkModeIcon sx={{ fontSize: 20 }} />
      </IconButton>

      <Avatar
        src="/avatar.png"
        sx={{
          width: 34,
          height: 34,
          bgcolor: '#ead9d3',
          color: '#69473f',
          fontSize: '13px',
          fontWeight: 700,
          cursor: 'pointer',
          border: '2px solid rgba(255,255,255,0.65)',
        }}
      >
        EA
      </Avatar>
    </Box>
  );
}
