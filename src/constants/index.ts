// Navigation items
export const NAV_ITEMS = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Portfolio", href: "#Portfolio" },
  { name: "Contact", href: "#Contact" },
] as const;

// Social media links
export const SOCIAL_LINKS = {
  github: "https://github.com/hiraeth12",
  linkedin: "https://linkedin.com/in/sahrulfirdaus",
  youtube: "https://www.youtube.com/@Kaagaya",
  instagram: "https://instagram.com/sahrulfirdaus",
  email: "sahrulridho@student.telkomuniversity.ac.id",
} as const;

// Tech stack icons mapping
export const TECH_ICONS = {
  React: "Globe",
  Tailwind: "Layout", 
  Express: "Cpu",
  Python: "Code",
  Javascript: "Code",
  HTML: "Code",
  CSS: "Code",
  default: "Package",
} as const;

// Animation durations
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  extra_slow: 800,
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
