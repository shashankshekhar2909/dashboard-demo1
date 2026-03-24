'use client';
import { Box, TextField, IconButton, Avatar, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function TopBar() {
  return (
    <Box
      sx={{
        height: '56px',
        bgcolor: '#2f446a',
        boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
        display: 'flex',
        alignItems: 'center',
        px: '24px',
        gap: '16px',
        flexShrink: 0,
      }}
    >
      {/* Spacer left */}
      <Box sx={{ flex: 1 }} />

      {/* Search */}
      <TextField
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
          width: '240px',
          '& .MuiOutlinedInput-root': {
            bgcolor: 'rgba(255,255,255,0.08)',
            borderRadius: '8px',
            color: '#FFFFFF',
            fontSize: '13px',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
            '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
            '&.Mui-focused fieldset': { borderColor: '#00BFA5' },
          },
          '& input::placeholder': { color: '#A8B8D8', opacity: 1 },
        }}
      />

      {/* Dark mode */}
      <IconButton size="small" sx={{ color: '#A8B8D8', '&:hover': { color: '#FFFFFF' } }}>
        <DarkModeIcon sx={{ fontSize: 20 }} />
      </IconButton>

      {/* Avatar */}
      <Avatar
        sx={{ width: 32, height: 32, bgcolor: '#00BFA5', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
      >
        EA
      </Avatar>
    </Box>
  );
}
