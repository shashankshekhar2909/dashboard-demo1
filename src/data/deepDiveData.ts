import { DeepDiveCardData } from '@/types';

export const deepDiveCards: DeepDiveCardData[] = [
  {
    id: 'country',
    title: 'Country Prioritization',
    description: 'AI-ranked country risk matrix based on scarcity index, infrastructure gap, and deployment readiness.',
    moduleColor: '#2196F3',
    iconName: 'Public',
    stats: [
      { label: 'Active Countries', value: '22' },
      { label: 'Pending Review', value: '7' },
    ],
    progressValue: 68,
    cta: 'View Rankings ›',
  },
  {
    id: 'deployment',
    title: 'Deployment Performance',
    description: 'Real-time tracking of infrastructure rollout milestones, contractor compliance, and on-ground outcomes.',
    moduleColor: '#4CAF50',
    iconName: 'Construction',
    stats: [
      { label: 'Efficiency Score', value: '92%' },
      { label: 'vs Last Quarter', value: '+8.2%' },
    ],
    progressValue: 92,
    cta: 'Analyze Metrics ›',
  },
  {
    id: 'proposal',
    title: 'Proposal Assessment',
    description: 'Pipeline of investment proposals scored on feasibility, impact potential, and funding alignment.',
    moduleColor: '#FF9800',
    iconName: 'Description',
    stats: [
      { label: 'Awaiting Review', value: '8' },
      { label: 'Approved This Month', value: '34' },
    ],
    progressValue: 55,
    cta: 'Review Proposals ›',
  },
  {
    id: 'intelligence',
    title: 'Intelligence Hub',
    description: 'Aggregated geopolitical, climate, and socioeconomic signals informing forward-looking water strategy.',
    moduleColor: '#9C27B0',
    iconName: 'Psychology',
    stats: [
      { label: 'Beneficiaries Supported', value: '142' },
      { label: 'AI Insights', value: '12 New' },
    ],
    progressValue: 74,
    cta: 'Explore Hub ›',
  },
];
