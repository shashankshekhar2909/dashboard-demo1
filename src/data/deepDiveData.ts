import { DeepDiveCardData } from '@/types';

export const deepDiveCards: DeepDiveCardData[] = [
  {
    id: 'country',
    title: 'Country Prioritization',
    description: 'Identify strategic regions for next deployment phase.',
    moduleColor: '#2196F3',
    iconName: 'FlagOutlined',
    stats: [
      { label: 'Active Countries', value: '22' },
      { label: 'Pending Review', value: '7' },
    ],
    progressValue: 75,
    cta: 'View Rankings',
  },
  {
    id: 'deployment',
    title: 'Deployment Performance',
    description: 'Track technical KPIs and logistical typical milestones.',
    moduleColor: '#4CAF50',
    iconName: 'Leaderboard',
    stats: [
      { label: 'Efficiency Score', value: '92%' },
      { label: 'vs Last Quarter', value: '+8.2%' },
    ],
    progressValue: 92,
    cta: 'Analyze Metrics',
  },
  {
    id: 'proposal',
    title: 'Proposal Assessment',
    description: 'Review and score incoming venture applications.',
    moduleColor: '#FF9800',
    iconName: 'Article',
    stats: [
      { label: 'Awaiting Review', value: '8' },
      { label: 'Approved This Month', value: '34' },
    ],
    progressValue: 60,
    cta: 'Review Proposals',
  },
  {
    id: 'intelligence',
    title: 'Intelligence Hub',
    description: 'Access global datasets and research documents.',
    moduleColor: '#9C27B0',
    iconName: 'Bolt',
    stats: [
      { label: 'Beneficiaries Supported', value: '142' },
      { label: 'AI Insights', value: '12 New' },
    ],
    progressValue: 85,
    cta: 'Explore Hub',
  },
];
