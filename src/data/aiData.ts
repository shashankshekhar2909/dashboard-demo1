import { PriorityItem, ForecastItem, DeploymentAlertData, TickerItem, PerformanceEntry } from '@/types';

export const priorities: PriorityItem[] = [
  {
    id: 1,
    title: 'Accelerate Sahel Region Deployments',
    description: 'Mali and Sudan remain at critical risk with only 1 active deployment each. Immediate capital allocation recommended.',
  },
  {
    id: 2,
    title: 'Bangladesh Arsenic Mitigation Scaling',
    description: 'Contamination levels exceed WHO thresholds in 14 districts. Biofiltration units must reach 500k beneficiaries by Q2.',
  },
  {
    id: 3,
    title: 'Strengthen Mekong Basin Monitoring',
    description: 'Vietnam and Cambodia face accelerating salinity intrusion. Real-time sensor network expansion critical before monsoon season.',
  },
];

export const deploymentAlert: DeploymentAlertData = {
  country: 'Mozambique',
  issue: 'Cyclone Damage — Infrastructure Offline',
  body: 'Post-cyclone assessment reveals 3 water treatment facilities inoperable. 280,000 beneficiaries without clean water access. Emergency procurement underway.',
};

export const forecastItems: ForecastItem[] = [
  {
    id: 'f1',
    title: 'El Niño Impact — Sub-Saharan Drought Risk',
    body: 'Probabilistic models indicate 73% likelihood of below-average rainfall across East Africa through Q3. Pre-position emergency water storage recommended.',
    positive: false,
  },
  {
    id: 'f2',
    title: 'Southeast Asia Productivity Gains Expected',
    body: 'Completed deployments in Thailand and Indonesia projected to add $340M in agricultural value by year-end, exceeding forecast by 18%.',
    positive: true,
  },
];

export const tickerItems: TickerItem[] = [
  { id: 't1', severity: 'high',   text: 'Portfolio Overexposed to East African Climate Risk', region: 'East Africa' },
  { id: 't2', severity: 'medium', text: 'Severe Drought Intensifying in Horn of Africa', region: 'East Africa' },
  { id: 't3', severity: 'high',   text: 'Political Instability Escalating in Pakistan', region: 'South Asia' },
  { id: 't4', severity: 'medium', text: 'Mozambique cyclone damage: 3 treatment plants offline', region: 'East Africa' },
  { id: 't5', severity: 'medium', text: 'Mekong Delta salinity intrusion reaches seasonal high', region: 'SE Asia' },
];

export const bestPerformer: PerformanceEntry = {
  country: 'Tanzania',
  region: 'East Africa',
  flagEmoji: '🇹🇿',
  delta: '+31%',
  positive: true,
};

export const needsAttention: PerformanceEntry = {
  country: 'Sudan',
  region: 'North Africa',
  flagEmoji: '🇸🇩',
  delta: '-14%',
  positive: false,
};
