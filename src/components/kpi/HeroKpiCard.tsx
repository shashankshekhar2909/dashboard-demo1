'use client';
import dynamic from 'next/dynamic';
import { Box, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { HeroKpiData } from '@/types';
import { baseChartOptions } from '@/theme/theme';
import { useCountUp } from '@/hooks/useCountUp';
import DeltaBadge from '@/components/common/DeltaBadge';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const iconMap: Record<string, React.ElementType> = {
  People: GroupsIcon,
  AccountBalance: AccountBalanceWalletIcon,
};

interface Props {
  data: HeroKpiData;
}

export default function HeroKpiCard({ data }: Props) {
  const countedValue = useCountUp(data.value, 2000);
  const isDark = data.variant === 'dark';
  const Icon = iconMap[data.icon];

  const chartOptions = {
    ...baseChartOptions,
    colors: [data.chartColor],
    chart: {
      ...baseChartOptions.chart,
      id: `hero-${data.id}`,
      height: 90,
    },
  };

  const textPrimary   = isDark ? '#FFFFFF' : '#1A2340';
  const textSecondary = isDark ? '#A8B8D8'  : '#6B7A99';
  const iconBg        = isDark ? 'rgba(255,255,255,0.15)' : '#F4F6F9';
  const iconColor     = isDark ? '#FFFFFF' : '#2f446a';

  const displayValue = data.id === 'capital'
    ? `$${countedValue}`
    : `${(countedValue / 1000000).toFixed(1)}`;

  return (
    <Box
      className="hero-kpi-card"
      sx={{
        background: isDark
          ? 'linear-gradient(135deg, #2D3F6B 0%, #1B2A4A 100%)'
          : '#FFFFFF',
        borderRadius: '16px',
        p: '24px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '160px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
        transition: 'box-shadow 200ms ease, transform 200ms ease',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      {/* Icon */}
      <Box
        className="hero-kpi-icon"
        sx={{
          width: 44,
          height: 44,
          borderRadius: '10px',
          bgcolor: iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: iconColor,
          flexShrink: 0,
        }}
      >
        <Icon sx={{ fontSize: 24 }} />
      </Box>

      {/* Chart — absolute top-right */}
      <Box sx={{ position: 'absolute', top: 16, right: 16, width: 200, height: 90, overflow: 'hidden' }}>
        <Chart
          type="bar"
          options={chartOptions}
          series={[{ name: data.label, data: data.series.data }]}
          height={90}
          width={200}
        />
      </Box>

      {/* Label */}
      <Typography sx={{ color: textSecondary, fontSize: '13px', fontWeight: 400, mt: '12px' }}>
        {data.label}
      </Typography>

      {/* Value + Delta */}
      <Box sx={{ display: 'flex', alignItems: 'baseline', mt: '4px', gap: '8px' }}>
        <Typography sx={{ color: textPrimary, fontSize: '36px', fontWeight: 700, lineHeight: 1.1 }}>
          {displayValue}
          <Typography component="span" sx={{ fontSize: '20px', fontWeight: 700, color: textPrimary, ml: '2px' }}>
            {data.suffix}
          </Typography>
        </Typography>
        <DeltaBadge delta={data.delta} positive={data.positive} onDark={isDark} />
      </Box>
    </Box>
  );
}
