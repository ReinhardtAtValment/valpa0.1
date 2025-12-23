# Valment Partners Inc. Website - Project Context

**Last Updated:** December 22, 2025  
**Project Location:** `C:\Users\rmueh\OneDrive\Documents\atValment\www\valpa0.1`  
**Status:** Phase 2 (Homepage & Services Page Complete)

---

## Project Overview

Building a professional website for **Valment Partners Inc.**, a consulting firm specializing in:
- Process Analytics & Continuous Improvement
- SAP Modernisation & Clean-Core Discovery
- Enterprise Architecture & Transformation Governance
- AI Governance & AI Agent Governance Foundations

**Based in:** Oakville, Ontario, Canada

---

## Business Context

### Company Branding
- **Public-facing name:** "Valment"
- **Legal entity:** "Valment Partners Inc."
- **Future US entity:** "Valment Solutions Inc."

### Target Audience
- Senior SAP architects
- Enterprise architects
- Transformation leaders
- IT directors and VPs
- Process excellence leaders

### Tone & Style
- Professional and grounded
- Technical but accessible
- Third-person perspective
- Brevity = credibility
- No marketing fluff
- Specific, not generic

---

## Technical Stack

### Core Technologies
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Deployment:** Static site export

### Project Structure
```
valpa0.1/
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage
│   └── services/
│       └── page.tsx       # Services page
├── components/
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── content/               # JSON content files
│   ├── homepage.json
│   └── services.json
├── docs/                  # Project documentation
├── plan/                  # Development planning docs
└── public/                # Static assets
```

---

## Design System

### Color Palette
- **Primary:** Navy blue (`#1e3a8a` / `hsl(223, 64%, 32%)`)
- **Secondary:** Deep teal 700 shade
- **Accent:** Amber
- **Text:** Foreground/Muted foreground from Tailwind

### Typography
- **Font Family:** Inter (system font)
- **Heading Sizes:**
  - `display-lg` - Main section headlines
  - `display-md` - Subsection headlines
- **Body Text:** `text-xl` for important descriptions, standard sizes elsewhere

### Spacing System
- Section padding: `py-24` (96px vertical)
- Column gaps: `gap-12` (48px)
- Standard margins: `mb-6`, `mb-12`, `mb-16`
- Max container width: `max-w-7xl`

### Component Patterns
- **Section backgrounds:** Alternating `default` (white) and `muted` (gray)
- **Icons:** Lucide React icons with colored backgrounds
- **Cards:** Gradient backgrounds, backdrop blur, hover effects
- **Navigation:** Floating dots (desktop), hidden on mobile

---

## Key Architectural Decisions

### 1. Content Management
**Pattern:** Separate content from code
- All page content in JSON files (`/content` directory)
- Components consume JSON data
- Easy for non-developers to update content

### 2. Component Reusability
**Pattern:** Build once, use everywhere
- `SectionHeader` - Used across all pages for consistency
- `SectionNav` - Floating navigation, reusable on any multi-section page
- `ServiceDetail` - Single component displays all 4 services
- Zero duplication achieved

### 3. Responsive Design
**Breakpoints:**
- Mobile: `< 640px` (sm)
- Tablet: `640px - 1024px` (md, lg)
- Desktop: `≥ 1024px` (lg, xl)
- Large Desktop: `≥ 1280px` (xl) - Floating nav appears

### 4. Static Site Generation
**Deployment:** Static export for any web server
- No server-side rendering needed
- All pages pre-rendered
- Contact form will call external service (future)

---

## Development Methodology

### Approach
1. **Incremental:** One page/section at a time
2. **Review Points:** Check after each major section
3. **Documentation:** Comprehensive logs in `/plan` directory
4. **Component First:** Build reusable components before pages

### Workflow Pattern
```
Plan → Build Component → Build Content → Integrate → Review → Document
```

### Key Principles
- **DRY (Don't Repeat Yourself):** Reusable components
- **Separation of Concerns:** Content/Presentation/Logic separate
- **TypeScript Safety:** Strong typing throughout
- **Accessibility First:** Semantic HTML, ARIA, keyboard support
- **Mobile Responsive:** Works on all screen sizes

---

## Content Structure

### Homepage Sections (6)
1. **Hero Carousel** - 4 service slides
2. **Value Proposition** - Challenge + Solution (3 pillars)
3. **Approach** - 3-step methodology
4. **Services Overview** - 4 service cards
5. **Credentials** - Experience, certifications, stats
6. **Final CTA** - Call to action

### Services Page Sections
1. **Overview** - Introduction
2. **Service Cards** - 4 clickable preview cards
3. **Service 1-4 Details** - Full service descriptions
4. **Floating Navigation** - Scroll tracking

### Service Detail Structure (consistent across all 4)
- Purpose
- Typical Context (3 points)
- What This Delivers (4-6 points)
- How It Works (4-5 steps)
- Value (3 points)
- Tooling

---

## Special Features & Innovations

### 1. SAP Plug and Gain Integration
**Service 2 (SAP Modernisation)** incorporates the SAP Signavio Plug and Gain approach:
- Combines Process Insights (breadth) + Process Intelligence (depth)
- Compresses discovery from months to days
- Specific deliverables: Process House, Best-Run Scores, Transaction Analysis
- Shows modern SAP expertise

### 2. Three Integrated Pillars (Valment Difference)
Renamed from original concept to emphasize integration:
1. **Process intelligence** - reveals reality
2. **Portfolio management** - prioritizes by value
3. **Value-Driven Governance** - ensures value realization

### 3. Floating Scroll Navigation
Reusable `SectionNav` component:
- Auto-tracks active section
- Smooth scroll on click
- Desktop only (≥1280px)
- Used on Homepage and Services page

---

## Important Constraints & Requirements

### Technical Constraints
1. **Static Site:** Must be deployable as static HTML/CSS/JS
2. **No Backend:** Contact form will use external service
3. **Windows Development:** File paths use backslashes for filesystem operations
4. **TypeScript:** Forward slashes in import statements

### Content Guidelines
- Professional, credible tone (no marketing fluff)
- Specific examples and approaches (not generic)
- Third-person perspective
- Concise, scannable content
- Value-focused messaging

### Design Requirements
- Modern, professional aesthetic
- Not "cheap application style"
- Visual hierarchy and consistency
- Icons/graphs in all sections for credibility
- Proper spacing and breathing room

---

## File Naming Conventions

### Components
- PascalCase: `SectionHeader.tsx`, `ServiceDetail.tsx`
- Client components: Start with `"use client"` directive
- Server components: No directive (default)

### Content Files
- kebab-case: `homepage.json`, `services.json`
- Located in `/content` directory

### Documentation
- UPPERCASE-WITH-HYPHENS.md: `PROJECT-CONTEXT.md`
- Located in `/docs` or `/plan` directories

---

## Key Contacts & Resources

### Project Owner
- **Name:** Rein (Reinhardt M.)
- **Role:** Founder, Valment Partners Inc.
- **LinkedIn:** https://www.linkedin.com/in/reinhardtm/
- **Location:** Oakville, Ontario, Canada

### Reference Documents
Located in `/mnt/project/`:
- `Business_profile_chat01` - Business profile discussion
- `LinkedIn_Profile` - LinkedIn URL
- `Go_to_market_01` - GTM strategy and positioning
- `Homedirectory` - Project location
- `New_service_content` - Service descriptions

---

## Browser & Tooling

### Development Browser
Standard modern browsers (Chrome, Firefox, Safari, Edge)

### Required Tools
- Node.js (for Next.js)
- npm or yarn (package management)
- TypeScript compiler
- Tailwind CSS

### VS Code Extensions (Recommended)
- TypeScript
- Tailwind CSS IntelliSense
- ESLint
- Prettier

---

## Documentation Locations

### Planning Documents
`/plan/` directory structure:
```
plan/
├── phase-2-home-page/
│   ├── Step 2.1 logs and checkpoints
│   └── Component refactoring docs
├── phase-2-services-page/
│   ├── Service completion logs
│   └── Feature addition docs
└── CONTENT-STRATEGY.md
```

### Technical Documentation
`/docs/` directory:
- `PROJECT-CONTEXT.md` (this file)
- `CURRENT-STATE.md` - What's complete
- `NEXT-STEPS.md` - What to do next
- `DESIGN-SYSTEM.md` - Detailed design patterns
- `HANDOFF-INSTRUCTIONS.md` - How to continue

---

## Version Control Considerations

**Note:** This project uses direct file editing (no git context provided)
- Maintain comprehensive documentation
- Create checkpoints in `/plan` directory
- Document all major decisions
- Keep CURRENT-STATE.md updated

---

## Success Metrics

### Technical Quality
- ✅ Zero code duplication
- ✅ TypeScript type safety
- ✅ Responsive design
- ✅ Accessibility standards
- ✅ Fast page loads (static site)

### Content Quality
- ✅ Professional tone
- ✅ Specific, credible information
- ✅ Clear value propositions
- ✅ Consistent messaging

### Design Quality
- ✅ Modern, professional aesthetic
- ✅ Visual consistency
- ✅ Clear hierarchy
- ✅ Scannable layouts

---

**Last Updated:** December 22, 2025  
**Next Review:** When starting new page/feature

---

## Quick Reference

**To understand current state:** Read `CURRENT-STATE.md`  
**To continue development:** Read `HANDOFF-INSTRUCTIONS.md`  
**To understand design patterns:** Read `DESIGN-SYSTEM.md`  
**To see what's next:** Read `NEXT-STEPS.md`
