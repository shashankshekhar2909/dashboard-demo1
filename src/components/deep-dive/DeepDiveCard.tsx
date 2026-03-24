'use client';
import { Box, Typography, Divider } from '@mui/material';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import BoltIcon from '@mui/icons-material/Bolt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DeepDiveCardData } from '@/types';
import ProgressBar from '@/components/common/ProgressBar';

const iconMap: Record<string, React.ElementType> = {
  FlagOutlined: FlagOutlinedIcon,
  Leaderboard: LeaderboardOutlinedIcon,
  Article: ArticleOutlinedIcon,
  Bolt: BoltIcon,
};

interface Props {
  data: DeepDiveCardData;
}

export default function DeepDiveCard({ data }: Props) {
  const Icon = iconMap[data.iconName];

  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        background: `linear-gradient(135deg, #FFFFFF 60%, ${data.moduleColor}08 100%)`,
        borderRadius: '12px',
        p: '20px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        border: '1px solid transparent',
        transition: 'box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          transform: 'translateY(-3px)',
          borderColor: `${data.moduleColor}4D`,
        },
      }}
    >
      {/* Top row */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: '15px', fontWeight: 600, color: '#1A2340', lineHeight: 1.3, flex: 1, pr: '8px' }}>
          {data.title}
        </Typography>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '10px',
            bgcolor: `${data.moduleColor}1A`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: data.moduleColor,
            flexShrink: 0,
          }}
        >
          {Icon && <Icon sx={{ fontSize: 20 }} />}
        </Box>
      </Box>

      {/* Description */}
      <Typography sx={{ fontSize: '13px', color: '#6B7A99', mt: '8px', lineHeight: 1.5 }}>
        {data.description}
      </Typography>

      {/* Divider */}
      <Divider sx={{ my: '16px', borderColor: '#F0F4F8' }} />

      {/* Stats */}
      {data.stats.map((stat) => (
        <Box key={stat.label} sx={{ display: 'flex', justifyContent: 'space-between', mb: '8px' }}>
          <Typography sx={{ fontSize: '13px', color: '#6B7A99' }}>{stat.label}</Typography>
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: data.moduleColor }}>
            {stat.value}
          </Typography>
        </Box>
      ))}

      {/* Progress bar */}
      <ProgressBar value={data.progressValue} color={data.moduleColor} />

      {/* CTA */}
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          mt: '16px',
          fontSize: '14px',
          fontWeight: 500,
          color: data.moduleColor,
          cursor: 'pointer',
          '&:hover': { opacity: 0.8 },
        }}
      >
        <Typography sx={{ fontSize: '14px', fontWeight: 500, color: data.moduleColor }}>
          {data.cta}
        </Typography>
        <ChevronRightIcon sx={{ fontSize: 16, color: data.moduleColor }} />
      </Box>
    </Box>
  );
}
