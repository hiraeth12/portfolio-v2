// types/portfolioTypes.ts
export interface Project {
  id: string;
  Img: string;
  Title: string;
  Description: string;
  Link: string;
  Github?: string;
  TechStack?: string[];
  Features?: string[];
}

export interface Certificate {
  Img: string;
}

export interface TechStackItem {
  icon: string;
  language: string;
}

export interface TechBadgeProps {
  tech: string;
}

export interface FeatureItemProps {
  feature: string;
}

export interface ProjectStatsProps {
  project: Project;
}

export interface CardProjectProps {
  Img: string;
  Title: string;
  Description: string;
  Link?: string;
  id?: string;
}
