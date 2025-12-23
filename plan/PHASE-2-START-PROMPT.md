# Prompt for Starting Phase 2 - Home Page Development

**Copy and paste this into a new chat in the same project to continue development.**

---

## Prompt

I'm continuing development of the Valment website. We're building a professional website for Valment Partners Inc. (brand name: "Valment"), a process optimization and AI governance consulting firm.

### PROJECT LOCATION:
- **Path:** `C:\Users\rmueh\OneDrive\Documents\atValment\www\valpa0.1`
- **Framework:** Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui
- **All planning docs:** `/plan` directory

### PROJECT STATUS - COMPLETED WORK:

✅ **Phase 0: Foundation & Setup**
- Step 0.1: Next.js project initialized
- Step 0.2: Design tokens configured
  - Primary: Navy Blue (220, 70%, 30%)
  - Secondary: Deep Teal 700 (185, 75%, 28%)
  - Accent: Amber (38, 92%, 55%)
  - Font: Inter

✅ **Phase 1: Design System - COMPLETE**
- Step 1.1: Layout Components
  - Header with "Valment" branding
  - Footer with brand/legal distinction
  - Files: `components/layout/header.tsx`, `components/layout/footer.tsx`

- Step 1.2: Core UI Components (all using shadcn/ui as base)
  - Button (multiple variants, sizes, with icon support)
  - Section (layout container with spacing/background variants)
  - Heading (semantic headings with flexible sizing)
  - FeatureCard (icons + content + optional links)
  - Card (standard shadcn/ui card)
  - Files in: `components/ui/`

- Step 1.3: Icon & Badge System
  - Icon library: lucide-react (organized by category)
  - CertificationBadge component for credentials
  - Badge component (shadcn/ui)
  - File: `components/ui/certification-badge.tsx`
  - Showcase: `app/icons-badges/page.tsx`

### KEY BRANDING DECISIONS:
- **Brand name:** "Valment" (public-facing)
- **Legal entity:** "Valment Partners Inc." (copyright, legal docs)
- **Location:** Oakville, Ontario, Canada
- **See:** `/plan/BRAND-GUIDELINES.md`

### SHOWCASE PAGES CREATED:
- Design system: `app/design-system/page.tsx`
- Components: `app/components-showcase/page.tsx`
- Icons & badges: `app/icons-badges/page.tsx`

### NEXT STEPS - PHASE 2: HOME PAGE

**Current Step:** Phase 2, Step 2.1 - Hero Section

**What needs to be built:**
According to `/plan/MASTER-PLAN.md` and `/plan/phase-2-home-page/step-2.1-hero.md`, we need to create:

1. **Hero Section Component**
   - Headline emphasizing process discovery + improvement portfolio
   - Subheadline about governance and business value
   - Primary CTA button
   - Visual element (possibly gradient or subtle pattern)
   - Use existing components (Section, Heading, Button)

2. **Home Page Integration**
   - Create/update `app/page.tsx` with hero section
   - Ensure responsive design
   - Follow brand guidelines

**Reference documents:**
- Master plan: `/plan/MASTER-PLAN.md`
- Step details: `/plan/phase-2-home-page/step-2.1-hero.md`
- Business profile: See attached business profile documents
- Go-to-market: See attached GTM strategy documents

### APPROACH & PATTERNS:

1. **Use shadcn/ui as foundation** - Always customize existing components rather than building from scratch
2. **Build incrementally** - Complete one step, checkpoint, then proceed
3. **Document everything** - Update step files in `/plan/phase-X/` directories
4. **Windows paths** - Use backslashes for file paths
5. **Showcase pages** - Demonstrate components for future reference

### IMPORTANT FILES TO REFERENCE:

**Design System:**
- `/plan/BRAND-GUIDELINES.md` - Official branding rules
- `/components/ui/` - All UI components
- `/app/components-showcase/page.tsx` - Component examples

**Planning:**
- `/plan/MASTER-PLAN.md` - Complete development roadmap
- `/plan/phase-2-home-page/` - Phase 2 step-by-step plans
- `/plan/INDEX.md` - Quick navigation guide

**Business Context:**
- Attached business profile chat
- Attached GTM strategy
- Attached LinkedIn profile

### DESIGN SYSTEM COMPONENTS AVAILABLE:

**Layout:**
- `Header` - Navigation with Valment branding
- `Footer` - Brand info + copyright distinction
- `Section` - Container with width/spacing/background variants

**UI Components:**
- `Button` - Multiple variants (default, secondary, accent, outline, ghost, link)
- `Heading` - Semantic levels (h1-h3) with flexible sizes (display-2xl to display-sm)
- `FeatureCard` - Icon + title + description + optional link
- `Card` - Standard content card
- `Badge` - Labels and tags
- `CertificationBadge` - Professional credentials display

**Icons:**
- lucide-react library with 50+ categorized icons
- Process, AI, Governance, Data, Business categories
- See: `/app/icons-badges/page.tsx`

### MESSAGING GUIDANCE (from GTM strategy):

**Core positioning:**
"We help organizations discover, prioritize, and deliver process improvements – including automation and agentic AI – using process & data intelligence, and then govern the portfolio as a fractional advisor so business value stays transparent."

**Key offerings:**
1. Process Discovery & Improvement Sprint (4-6 weeks)
2. Fractional Process & Automation Portfolio Lead (ongoing)

**Focus:**
- Process discovery → improvement portfolio
- Business value transparency
- Automation and AI opportunities
- Portfolio governance

### WHAT I NEED:

Please help me start Phase 2, Step 2.1: Hero Section. 

1. Review the current state in `/plan/phase-2-home-page/step-2.1-hero.md`
2. Create the hero section component using our existing design system
3. Integrate it into the home page
4. Follow our incremental approach with checkpoint reviews
5. Update documentation when complete

Let me know when you're ready to start, and feel free to ask questions about any aspect of the project!

---

**Project Context:** This is a methodical, phased development with continuous checkpoints. We build incrementally and document thoroughly. Quality over speed.
