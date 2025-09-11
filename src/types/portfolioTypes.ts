// types/portfolioTypes.ts

// Core project interface
export interface Project {
  id: string;
  Img: string | string[]; // Support both single image and array of images
  Title: string;
  Description: string;
  Link: string;
  Github?: string;
  TechStack?: string[];
  Features?: string[];
}

// Certificate interface
export interface Certificate {
  Img: string;
  title?: string;
  description?: string;
}

// Tech stack interface
export interface TechStackItem {
  icon: string;
  language: string;
}

// Component prop interfaces
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
  Img: string | string[];
  Title: string;
  Description: string;
  Link?: string;
  id?: string;
}

// Navigation interfaces
export interface NavItem {
  name: string;
  href: string;
}

// Animation interfaces
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}
