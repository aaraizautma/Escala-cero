export interface ImpactMetrics {
  localSalaryRange: string;
  remoteSalaryRange: string;
  placementRate: string;
  minPlacementRate: string;
  deliverablesCount: number;
  certifications: string[];
}

export interface VacancyComparison {
  id: string;
  role: string;
  company: string;
  salaryUsd: string;
  salaryMxn: string;
  traditionalUniv: string;
  escalaCeroProfile: string;
  keyTech: string[];
  location: string;
}

export interface ModuleItem {
  id: number;
  title: string;
  phase: string;
  weeks: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface Milestone {
  phase: string;
  year: string;
  title: string;
  status: 'completado' | 'en_progreso' | 'planificado';
  description: string;
  kpi: string;
}
