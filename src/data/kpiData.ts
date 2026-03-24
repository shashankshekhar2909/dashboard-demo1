import { HeroKpiData, SecondaryKpiData } from '@/types';

const months7d = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
const months30d = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
const months90d = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
const months1y = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

export const heroKpiData: HeroKpiData[] = [
  {
    id: 'beneficiaries',
    label: 'Total Beneficiaries Reached',
    value: 12400000,
    displayValue: '12.4',
    suffix: 'M',
    delta: '+34%',
    positive: true,
    icon: 'People',
    chartColor: '#90A4C8',
    series: {
      categories: months7d,
      data: [8.2, 8.9, 9.5, 10.1, 11.0, 11.8, 12.4],
    },
    variant: 'dark',
  },
  {
    id: 'capital',
    label: 'Total Capital Deployed',
    value: 450,
    displayValue: '$450',
    suffix: 'M',
    delta: '+22%',
    positive: true,
    icon: 'AccountBalance',
    chartColor: '#2563EB',
    series: {
      categories: months7d,
      data: [280, 310, 340, 370, 400, 425, 450],
    },
    variant: 'light',
  },
];

export const secondaryKpiData: SecondaryKpiData[] = [
  {
    id: 'water',
    label: 'Water Secured (Liters/Day)',
    value: 850400000,
    displayValue: '850.4',
    suffix: 'ML',
    delta: '+34%',
    positive: true,
    icon: 'WaterDrop',
    chartColor: '#1E3A5F',
    seriesByPeriod: {
      '7 days':  { categories: months7d,  data: [620, 660, 695, 720, 760, 810, 850] },
      '30 days': { categories: months30d, data: [580, 610, 640, 670, 710, 770, 820] },
      '90 days': { categories: months90d, data: [500, 540, 580, 620, 680, 740, 800] },
      '1 year':  { categories: months1y,  data: [400, 450, 500, 560, 620, 700, 780] },
    },
  },
  {
    id: 'economic',
    label: 'Economic Impact',
    value: 2100,
    displayValue: '$2.1',
    suffix: 'B',
    delta: '+62%',
    positive: true,
    icon: 'TrendingUp',
    chartColor: '#2E7D32',
    seriesByPeriod: {
      '7 days':  { categories: months7d,  data: [1200, 1350, 1480, 1620, 1780, 1950, 2100] },
      '30 days': { categories: months30d, data: [1100, 1240, 1380, 1520, 1680, 1860, 2020] },
      '90 days': { categories: months90d, data: [900, 1050, 1200, 1380, 1560, 1760, 1980] },
      '1 year':  { categories: months1y,  data: [600, 750, 900, 1100, 1350, 1600, 1900] },
    },
  },
  {
    id: 'productivity',
    label: 'Productivity Improvement Index',
    value: 25,
    displayValue: '25',
    suffix: '%',
    delta: '+50%',
    positive: true,
    icon: 'Timeline',
    chartColor: '#1565C0',
    seriesByPeriod: {
      '7 days':  { categories: months7d,  data: [14, 16, 18, 20, 22, 23, 25] },
      '30 days': { categories: months30d, data: [12, 15, 17, 19, 21, 23, 24] },
      '90 days': { categories: months90d, data: [8, 11, 14, 17, 20, 22, 24] },
      '1 year':  { categories: months1y,  data: [4, 7, 10, 14, 18, 21, 23] },
    },
  },
  {
    id: 'health',
    label: 'Health Improvement Indicators',
    value: 31,
    displayValue: '31',
    suffix: '%',
    delta: '+21%',
    positive: true,
    icon: 'LocalHospital',
    chartColor: '#E65100',
    seriesByPeriod: {
      '7 days':  { categories: months7d,  data: [17, 19, 22, 24, 27, 29, 31] },
      '30 days': { categories: months30d, data: [15, 18, 21, 23, 26, 28, 30] },
      '90 days': { categories: months90d, data: [10, 13, 17, 20, 24, 27, 30] },
      '1 year':  { categories: months1y,  data: [5, 8, 12, 16, 20, 25, 28] },
    },
  },
];
