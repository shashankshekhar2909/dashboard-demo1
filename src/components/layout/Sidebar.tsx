'use client';
import { useState } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import RadarIcon from '@mui/icons-material/Radar';
import TuneIcon from '@mui/icons-material/Tune';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const strategicItems = [
  { icon: DevicesOutlinedIcon, label: 'Control Room', active: true },
  { icon: PublicOutlinedIcon, label: 'Countries' },
];

const assessmentItems = [
  { icon: LeaderboardOutlinedIcon, label: 'Deployments' },
  { icon: ArticleOutlinedIcon, label: 'Proposals' },
  { icon: RadarIcon, label: 'Intelligence' },
];

const systemItems = [
  { icon: TuneIcon, label: 'Settings' },
];

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  collapsed: boolean;
}

function NavItem({ icon: Icon, label, active = false, collapsed }: NavItemProps) {
  return (
    <Tooltip title={collapsed ? label : ''} placement="right">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          px: '12px',
          py: '9px',
          mx: '8px',
          borderRadius: '8px',
          cursor: 'pointer',
          color: active ? '#2f446a' : '#4B5F82',
          bgcolor: active ? 'rgba(47,68,106,0.12)' : 'transparent',
          borderLeft: active ? '3px solid #2f446a' : '3px solid transparent',
          transition: 'all 150ms ease',
          '&:hover': {
            bgcolor: 'rgba(47,68,106,0.08)',
            color: '#2f446a',
            borderLeft: active ? '3px solid #2f446a' : '3px solid transparent',
          },
        }}
      >
        <Icon sx={{ fontSize: 20 }} />
        {!collapsed && (
          <Typography sx={{ fontSize: '16px', fontWeight: 400, whiteSpace: 'nowrap' }}>
            {label}
          </Typography>
        )}
      </Box>
    </Tooltip>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <Typography
      sx={{
        fontSize: '12px',
        fontWeight: 600,
        color: 'rgba(47,68,106,0.5)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        px: '20px',
        mb: '4px',
      }}
    >
      {label}
    </Typography>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box
      className="sidebar"
      sx={{
        width: collapsed ? '56px' : '200px',
        minHeight: '100vh',
        bgcolor: '#e9edf4',
        boxShadow: '2px 0 8px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 200ms ease',
        flexShrink: 0,
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: '12px',
          pt: '16px',
          pb: '12px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
          <WaterDropIcon sx={{ color: '#00BFA5', fontSize: 24, flexShrink: 0 }} />
          {!collapsed && (
            <Typography sx={{ color: '#2f446a', fontSize: '16px', fontWeight: 600, whiteSpace: 'nowrap' }}>
              AquaImpact
            </Typography>
          )}
        </Box>
        <IconButton
          size="small"
          onClick={() => setCollapsed(!collapsed)}
          sx={{ color: '#4B5F82', p: '4px', '&:hover': { color: '#2f446a' } }}
        >
          {collapsed ? <ChevronRightIcon sx={{ fontSize: 18 }} /> : <ChevronLeftIcon sx={{ fontSize: 18 }} />}
        </IconButton>
      </Box>

      {/* STRATEGIC */}
      <Box sx={{ mt: '8px' }}>
        {!collapsed && <SectionLabel label="Strategic" />}
        {strategicItems.map((item) => (
          <NavItem key={item.label} {...item} collapsed={collapsed} />
        ))}
      </Box>

      {/* ASSESSMENT */}
      <Box sx={{ mt: '16px' }}>
        {!collapsed && <SectionLabel label="Assessment" />}
        {assessmentItems.map((item) => (
          <NavItem key={item.label} {...item} collapsed={collapsed} />
        ))}
      </Box>

      {/* Spacer */}
      <Box sx={{ flex: 1 }} />

      {/* System */}
      <Box sx={{ pb: '24px' }}>
        {systemItems.map((item) => (
          <NavItem key={item.label} {...item} collapsed={collapsed} />
        ))}
      </Box>
    </Box>
  );
}
