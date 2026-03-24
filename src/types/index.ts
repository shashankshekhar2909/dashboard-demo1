export interface MapMarkerData {
  id: string;
  country: string;
  region: 'Africa' | 'South Asia' | 'Southeast Asia' | 'Other';
  lat: number;
  lng: number;
  riskLevel: 'low' | 'medium' | 'high';
  status: 'deployed' | 'in-progress' | 'pending';
  capitalDeployed: string;
  capitalValue: number;
  waterScarcity: string;
  impactScore: string;
  infrastructure: string;
  activeDeployments: number;
  deploymentLabels: string[];
  intelligence: string[];
  flagEmoji: string;
}

export interface KpiSparklineSeries {
  categories: string[];
  data: number[];
}

export interface HeroKpiData {
  id: string;
  label: string;
  value: number;
  displayValue: string;
  suffix: string;
  delta: string;
  positive: boolean;
  icon: string;
  chartColor: string;
  series: KpiSparklineSeries;
  variant: 'dark' | 'light';
}

export interface SecondaryKpiData {
  id: string;
  label: string;
  value: number;
  displayValue: string;
  suffix: string;
  delta: string;
  positive: boolean;
  icon: string;
  chartColor: string;
  seriesByPeriod: Record<string, KpiSparklineSeries>;
}

export interface PriorityItem {
  id: number;
  title: string;
  description: string;
}

export interface ForecastItem {
  id: string;
  title: string;
  body: string;
  positive: boolean;
}

export interface DeploymentAlertData {
  country: string;
  issue: string;
  body: string;
}

export interface DeepDiveCardData {
  id: string;
  title: string;
  description: string;
  moduleColor: string;
  iconName: string;
  stats: { label: string; value: string }[];
  progressValue: number;
  cta: string;
}

export interface TickerItem {
  id: string;
  severity: 'high' | 'medium';
  text: string;
  region: string;
}

export interface PerformanceEntry {
  country: string;
  region: string;
  flagEmoji: string;
  delta: string;
  positive: boolean;
}
