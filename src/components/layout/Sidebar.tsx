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
          px: '14px',
          py: '12px',
          mx: '10px',
          borderRadius: '8px',
          cursor: 'pointer',
          color: active ? '#ffffff' : '#2f3237',
          bgcolor: active ? '#32486f' : 'transparent',
          borderLeft: '0',
          transition: 'all 150ms ease',
          '&:hover': {
            bgcolor: active ? '#32486f' : 'rgba(50,72,111,0.08)',
            color: active ? '#ffffff' : '#32486f',
          },
        }}
      >
        <Icon sx={{ fontSize: 20 }} />
        {!collapsed && (
          <Typography sx={{ fontSize: '15px', fontWeight: active ? 600 : 400, whiteSpace: 'nowrap' }}>
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
        color: '#8d95a3',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        px: '14px',
        mb: '8px',
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
        bgcolor: '#dfe6f1',
        borderRight: '1px solid #cfd7e4',
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
          bgcolor: '#2F446A',
          px: '14px',
          pt: '22px',
          pb: '18px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
          <WaterDropIcon sx={{ color: '#ffffff', fontSize: 26, flexShrink: 0 }} />
          {!collapsed && (
            <Typography sx={{ color: '#ffffff', fontSize: '17px', fontWeight: 700, whiteSpace: 'nowrap' }}>
              AquaImpact
            </Typography>
          )}
        </Box>
        <IconButton
          size="small"
          onClick={() => setCollapsed(!collapsed)}
          sx={{
            color: '#ffffff',
            p: '4px',
            bgcolor: 'rgba(255,255,255,0.12)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.18)' },
          }}
        >
          {collapsed ? <ChevronRightIcon sx={{ fontSize: 18 }} /> : <ChevronLeftIcon sx={{ fontSize: 18 }} />}
        </IconButton>
      </Box>

      <Box sx={{ height: '1px', bgcolor: 'rgba(255,255,255,0.08)' }} />

      <Box sx={{ mt: '14px' }}>
        {!collapsed && <SectionLabel label="Strategic" />}
        {strategicItems.map((item) => (
          <NavItem key={item.label} {...item} collapsed={collapsed} />
        ))}
      </Box>

      <Box sx={{ mt: '18px' }}>
        {!collapsed && <SectionLabel label="Assessment" />}
        {assessmentItems.map((item) => (
          <NavItem key={item.label} {...item} collapsed={collapsed} />
        ))}
      </Box>

      <Box sx={{ flex: 1 }} />

      <Box sx={{ pb: '24px' }}>
        {systemItems.map((item) => (
          <NavItem key={item.label} {...item} collapsed={collapsed} />
        ))}
      </Box>
    </Box>
  );
}
