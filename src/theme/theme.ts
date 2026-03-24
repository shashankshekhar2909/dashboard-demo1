import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary:   { main: '#1565C0' },
    secondary: { main: '#00BFA5' },
    error:     { main: '#F44336' },
    warning:   { main: '#FF9800' },
    success:   { main: '#4CAF50' },
    background: {
      default: '#EEF2F7',
      paper:   '#FFFFFF',
    },
    text: {
      primary:   '#1A2340',
      secondary: '#6B7A99',
      disabled:  '#9AA3B8',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: { fontSize: '36px', fontWeight: 700 },
    h2: { fontSize: '28px', fontWeight: 700 },
    h3: { fontSize: '24px', fontWeight: 500 },
    h4: { fontSize: '16px', fontWeight: 600 },
    h5: { fontSize: '15px', fontWeight: 600 },
    h6: { fontSize: '14px', fontWeight: 600 },
    body1: { fontSize: '14px', fontWeight: 400 },
    body2: { fontSize: '13px', fontWeight: 400 },
    caption: { fontSize: '12px', fontWeight: 400 },
    overline: { fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
          transition: 'box-shadow 200ms ease, transform 200ms ease',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontFamily: '"Roboto", sans-serif',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: { fontSize: '13px' },
      },
    },
  },
});

export const colors = {
  bgPage: '#EEF2F7',
  bgSidebar: '#1B2A4A',
  bgTopbar: '#1B2A4A',
  surfaceCard: '#FFFFFF',
  surfaceHero: '#2D3F6B',
  surfaceMap: '#2D4B7A',
  surfaceInput: '#F5F7FA',

  textPrimary: '#1A2340',
  textSecondary: '#6B7A99',
  textMuted: '#9AA3B8',
  textOnDark: '#FFFFFF',
  textOnDarkSub: '#A8B8D8',
  textLink: '#2196F3',

  brandTeal: '#00BFA5',
  brandBlue: '#1565C0',
  accentGreen: '#4CAF50',
  accentOrange: '#FF9800',
  accentRed: '#F44336',
  accentAmber: '#FFC107',

  chartBeneficiaries: '#90A4C8',
  chartCapital: '#2563EB',
  chartWater: '#1E3A5F',
  chartEconomic: '#2E7D32',
  chartProductivity: '#1565C0',
  chartHealth: '#E65100',

  riskLow: '#4CAF50',
  riskMedium: '#FF9800',
  riskHigh: '#F44336',

  moduleCountry: '#2196F3',
  moduleDeployment: '#4CAF50',
  moduleProposal: '#FF9800',
  moduleIntelligence: '#9C27B0',

  border: '#E2E8F0',
  borderDark: '#3A4F7A',
  divider: '#F0F4F8',

  alertBg: '#FFF8E1',
  alertBorder: '#FFB300',
  alertIcon: '#F59E0B',
  alertText: '#7B5A00',
};

export const baseChartOptions = {
  chart: {
    type: 'bar' as const,
    sparkline: { enabled: true },
    toolbar: { show: false },
    background: 'transparent',
    parentHeightOffset: 0,
    animations: {
      enabled: true,
      easing: 'easeinout' as const,
      speed: 800,
      animateGradually: { enabled: true, delay: 100 },
      dynamicAnimation: { enabled: true, speed: 350 },
    },
  },
  grid: { show: false },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { show: false },
  dataLabels: { enabled: false },
  tooltip: {
    enabled: true,
    theme: 'dark' as const,
    style: { fontSize: '12px', fontFamily: 'Roboto, sans-serif' },
  },
  states: {
    hover: { filter: { type: 'lighten' as const, value: 0.1 } },
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      columnWidth: '55%',
    },
  },
};
