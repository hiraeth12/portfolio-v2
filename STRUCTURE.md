# Project Structure

This project follows Next.js 14+ App Router best practices with TypeScript.

## Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── project/[id]/            # Dynamic project pages
│       └── page.tsx
├── components/                   # React components
│   ├── features/                # Feature-specific components
│   │   ├── about/              # About section components
│   │   └── portfolio/          # Portfolio-related components
│   ├── layout/                 # Layout components
│   │   └── Navbar.tsx
│   ├── sections/               # Page sections
│   │   ├── AboutSection.tsx
│   │   ├── CertificateSection.tsx
│   │   ├── HeroSection.tsx
│   │   └── contact/
│   │       └── ContactSection.tsx
│   ├── ui/                     # Reusable UI components
│   │   └── TypewriterEffect.tsx
│   └── index.ts                # Component exports
├── constants/                   # Application constants
│   └── index.ts
├── data/                       # Static data files
│   ├── certificates.json
│   ├── projects.json
│   └── techStacks.json
├── hooks/                      # Custom React hooks
│   ├── useActiveSection.ts
│   ├── useIsMobile.ts
│   └── index.ts
├── lib/                        # Utility functions
│   └── utils.ts
└── types/                      # TypeScript definitions
    ├── portfolioTypes.ts
    ├── sweetalert2.d.ts
    └── index.ts

public/                         # Static assets
├── images/                     # General images
├── project_images/             # Project screenshots
├── certificate_images/         # Certificate images
└── CV.pdf                      # Resume
```

## Import Conventions

### Components
```typescript
// From features
import { CardProject } from '@/components/features/portfolio';

// From UI
import { TypewriterEffect } from '@/components/ui';

// From layout
import { Navbar } from '@/components/layout';

// Or use barrel exports
import { 
  CardProject, 
  TypewriterEffect, 
  Navbar 
} from '@/components';
```

### Utilities & Hooks
```typescript
import { cn } from '@/lib/utils';
import { useIsMobile, useActiveSection } from '@/hooks';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/constants';
```

### Types
```typescript
import type { Project, TechStackItem } from '@/types';
```

## Best Practices

1. **Component Organization**: Components are organized by purpose (layout, sections, features, ui)
2. **Clean Imports**: Use barrel exports (index.ts) for cleaner imports
3. **Type Safety**: Comprehensive TypeScript interfaces for all data structures
4. **Custom Hooks**: Reusable logic extracted into custom hooks
5. **Constants**: Application constants centralized for maintainability
6. **Consistent Naming**: PascalCase for components, camelCase for utilities/hooks

## File Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useIsMobile.ts`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Types**: camelCase with descriptive suffix (e.g., `portfolioTypes.ts`)
- **Constants**: camelCase (e.g., `index.ts`)
