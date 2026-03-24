'use client';
import { Box, Typography, Divider } from '@mui/material';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import BoltIcon from '@mui/icons-material/Bolt';
import { DeepDiveCardData } from '@/types';
import ProgressBar from '@/components/common/ProgressBar';

const iconMap: Record<string, React.ReactNode> = {
  Public: <FlagOutlinedIcon sx={{ fontSize: 20 }} />,
  Construction: <BarChartOutlinedIcon sx={{ fontSize: 20 }} />,
  Description: <AssignmentOutlinedIcon sx={{ fontSize: 20 }} />,
  Psychology: <BoltIcon sx={{ fontSize: 20 }} />,
};

interface Props {
  data: DeepDiveCardData;
}

export default function DeepDiveCard({ data }: Props) {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        background: `linear-gradient(135deg, #FFFFFF 60%, ${data.moduleColor}0A)`,
        borderRadius: '12px',
        p: '20px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
        border: '1px solid transparent',
        transition: 'box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
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
            bgcolor: `${data.moduleColor}26`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: data.moduleColor,
            flexShrink: 0,
          }}
        >
          {iconMap[data.iconName]}
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
        <Box key={stat.label} sx={{ display: 'flex', justifyContent: 'space-between', mb: '6px' }}>
          <Typography sx={{ fontSize: '13px', color: '#6B7A99' }}>{stat.label}</Typography>
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: data.moduleColor }}>
            {stat.value}
          </Typography>
        </Box>
      ))}

      {/* Progress bar */}
      <ProgressBar value={data.progressValue} color={data.moduleColor} />

      {/* CTA */}
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 500,
          color: data.moduleColor,
          mt: '16px',
          cursor: 'pointer',
          '&:hover': { opacity: 0.8 },
        }}
      >
        {data.cta}
      </Typography>
    </Box>
  );
}
