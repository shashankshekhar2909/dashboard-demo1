'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Box, Typography, Select, MenuItem } from '@mui/material';
import WavesIcon from '@mui/icons-material/Waves';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { SecondaryKpiData } from '@/types';
import { baseChartOptions } from '@/theme/theme';
import { useCountUp } from '@/hooks/useCountUp';
import DeltaBadge from '@/components/common/DeltaBadge';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const iconMap: Record<string, React.ReactNode> = {
  WaterDrop: <WavesIcon sx={{ fontSize: 20 }} />,
  TrendingUp: <ShowChartIcon sx={{ fontSize: 20 }} />,
  Agriculture: <AgricultureIcon sx={{ fontSize: 20 }} />,
  LocalHospital: <FavoriteOutlinedIcon sx={{ fontSize: 20 }} />,
};

const periods = ['7 days', '30 days', '90 days', '1 year'];

interface Props {
  data: SecondaryKpiData;
}

export default function SecondaryKpiCard({ data }: Props) {
  const [period, setPeriod] = useState('7 days');
  const counted = useCountUp(data.value, 2000);

  const displayValue = data.suffix === '%'
    ? counted
    : data.suffix === 'M L'
    ? `${(counted / 1000000).toFixed(1)}`
    : data.suffix === 'B'
    ? `$${(counted / 1000).toFixed(1)}`
    : counted;

  const series = data.seriesByPeriod[period];

  const chartOptions = {
    ...baseChartOptions,
    colors: [data.chartColor],
    chart: {
      ...baseChartOptions.chart,
      id: `secondary-${data.id}-${period}`,
      height: 65,
    },
  };

  return (
    <Box
      className="secondary-kpi-card"
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: '12px',
        p: '16px 20px',
        flex: 1,
        height: 130,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
        transition: 'box-shadow 200ms ease, transform 200ms ease',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      {/* Top row: icon left, period selector right */}
      <Box className="secondary-kpi-top-row" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box
          className="secondary-kpi-icon"
          sx={{
            width: 36,
            height: 36,
            borderRadius: '10px',
            bgcolor: '#f4f6f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2f446a',
            flexShrink: 0,
          }}
        >
          {iconMap[data.icon]}
        </Box>

        <Select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          size="small"
          sx={{
            fontSize: '11px',
            color: '#6B7A99',
            bgcolor: '#f4f6f9',
            borderRadius: '6px',
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            '& .MuiSelect-select': { py: '4px', px: '8px', pr: '24px !important' },
            '& .MuiSvgIcon-root': { fontSize: '16px', color: '#6B7A99' },
          }}
        >
          {periods.map((p) => (
            <MenuItem key={p} value={p} sx={{ fontSize: '11px' }}>{p}</MenuItem>
          ))}
        </Select>
      </Box>

      {/* Bottom row: label+value left, chart right */}
      <Box
        className="secondary-kpi-bottom-row"
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 'auto' }}
      >
        {/* Left: label + value + delta */}
        <Box className="secondary-kpi-value-group" sx={{ minWidth: 0 }}>
          <Typography sx={{ color: '#6B7A99', fontSize: '12px', fontWeight: 400, lineHeight: 1.3 }}>
            {data.label}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '4px', mt: '2px' }}>
            <Typography sx={{ color: '#1A2340', fontSize: '22px', fontWeight: 700, lineHeight: 1.1 }}>
              {displayValue}
              <Typography component="span" sx={{ fontSize: '12px', fontWeight: 500, color: '#6B7A99', ml: '2px' }}>
                {data.suffix}
              </Typography>
            </Typography>
            <DeltaBadge delta={data.delta} positive={data.positive} />
          </Box>
        </Box>

        {/* Right: chart bottom-right */}
        <Box className="secondary-kpi-chart" sx={{ width: 130, height: 65, flexShrink: 0, overflow: 'hidden' }}>
          <Chart
            type="bar"
            options={chartOptions}
            series={[{ name: data.label, data: series.data }]}
            height={65}
            width={130}
          />
        </Box>
      </Box>
    </Box>
  );
}
