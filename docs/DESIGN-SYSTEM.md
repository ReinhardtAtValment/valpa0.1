# Design System - Valment Website

**Last Updated:** December 22, 2025  
**Purpose:** Comprehensive design patterns and conventions  
**Status:** Established and tested across 2 pages

---

## Overview

This document defines all design patterns, components, and conventions used in the Valment website. Following these ensures consistency and professional quality across all pages.

---

## 🎨 Color System

### Brand Colors

**Primary - Navy Blue**
```
Hex: #1e3a8a
HSL: hsl(223, 64%, 32%)
Tailwind: Use color name "primary"
Usage: Icons, accents, primary buttons, active states
```

**Secondary - Deep Teal**
```
Shade: 700 (specifically)
Tailwind: Use color name "secondary"
Usage: Secondary accents, icons, variation from primary
```

**Accent - Amber**
```
Tailwind: Use color name "accent"
Usage: Tertiary accents, highlights, call-to-actions
```

### Semantic Colors

**Foreground**
```
Usage: Primary text color
Tailwind: text-foreground
```

**Muted Foreground**
```
Usage: Secondary text, descriptions, less emphasized text
Tailwind: text-muted-foreground
```

**Background**
```
Usage: Main page background (white in light mode)
Tailwind: bg-background
```

**Muted Background**
```
Usage: Alternating section backgrounds (light gray)
Tailwind: bg-muted
```

**Border**
```
Usage: Component borders, dividers
Tailwind: border-border
```

### Color Usage Patterns

**Icons with Backgrounds:**
```tsx
<div className="p-3 rounded-xl bg-primary/10">
  <Icon className="w-6 h-6 text-primary" />
</div>
```

**Gradient Backgrounds:**
```tsx
<div className="bg-gradient-to-br from-primary/10 to-secondary/5">
  ...
</div>
```

**Hover States:**
```tsx
className="hover:bg-primary/15 transition-colors"
```

---

## 📐 Spacing System

### Container Widths

**Page Container (Standard)**
```tsx
<div className="max-w-7xl mx-auto px-8 lg:px-16">
  ...
</div>
```

**Text Container (Narrow)**
```tsx
<div className="max-w-4xl mx-auto">
  ...
</div>
```

**Text Container (Very Narrow)**
```tsx
<div className="max-w-3xl mx-auto">
  ...
</div>
```

### Section Spacing

**Section Component Spacing Options:**
```tsx
// Extra Large (96px vertical)
<Section spacing="xl" background="default">

// Large (64px vertical)
<Section spacing="lg" background="muted">

// None (manual control)
<Section spacing="none" background="default">
```

**Manual Section Padding:**
```tsx
className="py-24"    // 96px - Standard section
className="py-16"    // 64px - Reduced section
className="py-12"    // 48px - Tight section
```

### Standard Margins

**Between Elements:**
```tsx
className="mb-6"     // 24px - Between headline and subheadline
className="mb-8"     // 32px - Between sections (reduced)
className="mb-12"    // 48px - Standard section bottom
className="mb-16"    // 64px - Challenge variant
```

**Grid Gaps:**
```tsx
className="gap-6"    // 24px - Tight grid (service cards)
className="gap-8"    // 32px - Standard grid
className="gap-12"   // 48px - Comfortable grid (two-column layouts)
```

### Padding Patterns

**Cards:**
```tsx
className="p-6"      // 24px - Standard card padding
className="p-8"      // 32px - Large card padding
```

**Icons:**
```tsx
className="p-3"      // 12px - Small icon padding
className="p-4"      // 16px - Standard icon padding
```

---

## ✍️ Typography

### Font Family

**System Font: Inter**
- Clean, modern, professional
- Excellent readability
- Widely supported

### Heading Levels

**Display Large (Main Section Headings)**
```tsx
<Heading level={2} size="display-lg">
  Section Title
</Heading>

// Or use SectionHeader component
```

**Display Medium (Subsection Headings)**
```tsx
<Heading level={3} size="display-md">
  Subsection Title
</Heading>
```

**Standard Headings**
```tsx
<h2 className="text-4xl font-bold">...</h2>  // Large heading
<h3 className="text-2xl font-bold">...</h3>  // Medium heading
<h4 className="text-xl font-bold">...</h4>   // Small heading
```

### Text Sizes

**Body Text:**
```tsx
className="text-xl"           // Important descriptions, leads
className="text-lg"           // Standard body text
className="text-base"         // Default size
className="text-sm"           // Small text, captions
```

**Section Labels (Uppercase):**
```tsx
className="text-sm font-semibold uppercase tracking-wider"
// Used for: "Purpose", "What This Delivers", etc.
```

### Text Colors

**Standard Pattern:**
```tsx
<h2 className="text-foreground">Main Headline</h2>
<p className="text-muted-foreground">Description text</p>
```

### Line Height

```tsx
className="leading-relaxed"   // Body text (1.625)
className="leading-tight"     // Headlines (1.25)
```

---

## 🧩 Component Patterns

### Section Component

**Always use Section wrapper for page sections:**

```tsx
import { Section } from "@/components/ui/section";

<Section spacing="xl" background="default">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</Section>
```

**Props:**
- `spacing`: "none" | "lg" | "xl"
- `background`: "default" | "muted"

**Background Alternation Rule:**
ALWAYS alternate between `default` and `muted`. Never place same backgrounds adjacent.

### SectionHeader Component

**Always use SectionHeader for section headlines:**

```tsx
import { SectionHeader } from "@/components/ui/section-header";

<SectionHeader
  headline="Main Section Title"
  subheadline="Optional description or explanation"
  align="center"        // "center" | "left"
  variant="standard"    // "standard" | "challenge"
/>
```

**Variants:**
- `standard`: mb-12 (48px bottom margin)
- `challenge`: mb-16 (64px bottom margin)

**Override margin if needed:**
```tsx
<SectionHeader
  headline="Title"
  align="center"
  className="mb-8"    // Override default
/>
```

### SectionNav Component

**For multi-section pages:**

```tsx
import { SectionNav } from "@/components/layout/section-nav";

const sections = [
  { id: "section-1", label: "Section One" },
  { id: "section-2", label: "Section Two" },
  { id: "section-3", label: "Section Three" }
];

<SectionNav sections={sections} />
```

**Requirements:**
- Target elements must have matching `id` attributes
- Target elements should have `scroll-mt-24` class for header offset
- Desktop only (hidden < 1280px)

**Target Element Pattern:**
```tsx
<div id="section-1" className="scroll-mt-24">
  {/* Content */}
</div>
```

---

## 🎴 Card Patterns

### Standard Card Style

```tsx
<div className="relative group">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl group-hover:from-primary/15 group-hover:to-primary/10 transition-all"></div>
  
  {/* Card content */}
  <div className="relative p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl hover:shadow-lg transition-shadow">
    {/* Content */}
  </div>
</div>
```

**Key Elements:**
- Gradient background layer
- Backdrop blur on content
- Border
- Shadow on hover
- Rounded corners (rounded-2xl = 16px)

### Icon Cards

```tsx
<div className="inline-flex p-3 rounded-xl bg-primary/10">
  <Icon className="w-6 h-6 text-primary" />
</div>
```

**Variations by size:**
```tsx
// Small icon
className="p-3 rounded-xl"  // 12px padding

// Medium icon  
className="p-4 rounded-2xl"  // 16px padding

// Large icon
className="p-6 rounded-2xl"  // 24px padding
```

### Service Preview Cards

Used on Services page:

```tsx
<button onClick={handleClick} className="relative group h-full text-left">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-{color}/10 to-{color}/5 rounded-2xl ..."></div>
  
  {/* Card content */}
  <div className="relative p-6 bg-background/50 backdrop-blur-sm border ...">
    {/* Icon */}
    <div className="inline-flex p-3 rounded-xl bg-{color}/10 text-{color} mb-4">
      <Icon className="w-6 h-6" />
    </div>
    
    {/* Title */}
    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-{color} transition-colors">
      {title}
    </h3>
    
    {/* Description */}
    <p className="text-sm text-muted-foreground leading-relaxed">
      {description}
    </p>
  </div>
</button>
```

---

## 🔄 Layout Patterns

### Two-Column Layout

**Standard responsive grid:**

```tsx
<div className="grid lg:grid-cols-2 gap-12">
  <div>
    {/* Left column */}
  </div>
  <div>
    {/* Right column */}
  </div>
</div>
```

**Breaks to single column on mobile/tablet (< 1024px)**

### Four-Column Grid

**For service cards, stats, etc.:**

```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map(item => (
    <div key={item.id}>
      {/* Card content */}
    </div>
  ))}
</div>
```

**Responsive behavior:**
- Mobile: 1 column
- Tablet (≥640px): 2 columns
- Desktop (≥1024px): 4 columns

### Three-Column Grid

**For pillar cards, certification categories:**

```tsx
<div className="grid md:grid-cols-3 gap-8">
  {items.map(item => (
    <div key={item.id}>
      {/* Card content */}
    </div>
  ))}
</div>
```

**Responsive behavior:**
- Mobile: 1 column
- Tablet/Desktop (≥768px): 3 columns

### Alternating Content Layout

**Used in Approach section:**

```tsx
{/* Step 1 - Content left, visual right */}
<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div>
    {/* Content */}
  </div>
  <div>
    {/* Visual/Image */}
  </div>
</div>

{/* Step 2 - Content right, visual left */}
<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div className="lg:order-2">
    {/* Content */}
  </div>
  <div className="lg:order-1">
    {/* Visual/Image */}
  </div>
</div>
```

---

## 🎯 Icon Patterns

### Icon Libraries

**Primary: Lucide React**
```tsx
import { Icon1, Icon2, Icon3 } from "lucide-react";
```

**Common icons used:**
- `Network` - Process, connections
- `TrendingUp` - Growth, improvement
- `Shield` - Protection, governance
- `Target` - Focus, precision, goals
- `CheckCircle2` - Checkmarks, completion
- `Plus` - Add, expand

### Icon Sizes

```tsx
className="w-4 h-4"   // Small (16px) - inline, buttons
className="w-5 h-5"   // Medium-small (20px) - list items
className="w-6 h-6"   // Medium (24px) - standard icons
className="w-8 h-8"   // Large (32px) - feature icons
className="w-12 h-12" // Extra large (48px) - hero icons
```

### Icon with Background

**Standard pattern:**
```tsx
<div className="inline-flex p-3 rounded-xl bg-primary/10">
  <Icon className="w-6 h-6 text-primary" />
</div>
```

**Hover effect:**
```tsx
<div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
  <Icon className="w-6 h-6 text-primary" />
</div>
```

---

## 📝 List Patterns

### Checkmark List

**For deliverables, features:**

```tsx
import { CheckCircle2 } from "lucide-react";

<ul className="space-y-3">
  {items.map((item, index) => (
    <li key={index} className="flex gap-3 text-muted-foreground">
      <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
      <span className="leading-relaxed">{item}</span>
    </li>
  ))}
</ul>
```

### Bullet Point List

**For context, features:**

```tsx
<ul className="space-y-3">
  {items.map((item, index) => (
    <li key={index} className="flex gap-3 text-muted-foreground">
      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
      <span className="leading-relaxed">{item}</span>
    </li>
  ))}
</ul>
```

### Numbered List

**For steps, process flow:**

```tsx
<ol className="space-y-4">
  {steps.map((step, index) => (
    <li key={index} className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
        {index + 1}
      </div>
      <span className="text-muted-foreground leading-relaxed pt-1">
        {step}
      </span>
    </li>
  ))}
</ol>
```

---

## 🎬 Animation & Transitions

### Standard Transitions

```tsx
className="transition-colors"      // Color changes
className="transition-all"         // Multiple properties
className="transition-shadow"      // Shadow changes
className="transition-opacity"     // Fade effects
```

**Default duration:** 150ms (Tailwind default)

### Hover Effects

**Cards:**
```tsx
className="hover:shadow-lg transition-shadow"
```

**Buttons:**
```tsx
className="hover:bg-primary/90 transition-colors"
```

**Text:**
```tsx
className="group-hover:text-primary transition-colors"
```

### Smooth Scroll

**Built into SectionNav component:**
```typescript
window.scrollTo({
  top: offsetPosition,
  behavior: "smooth"
});
```

---

## 📱 Responsive Design

### Breakpoints

```
Mobile:        < 640px   (sm)
Tablet:        640-1024px (sm to lg)
Desktop:       ≥ 1024px  (lg)
Large Desktop: ≥ 1280px  (xl)
```

### Responsive Patterns

**Stack on Mobile:**
```tsx
<div className="grid lg:grid-cols-2 gap-12">
  {/* 2 columns on desktop, 1 on mobile */}
</div>
```

**Hide on Mobile:**
```tsx
<div className="hidden lg:block">
  {/* Desktop only */}
</div>
```

**Show on Mobile Only:**
```tsx
<div className="lg:hidden">
  {/* Mobile only */}
</div>
```

**Responsive Padding:**
```tsx
<div className="px-4 lg:px-8">
  {/* 16px on mobile, 32px on desktop */}
</div>
```

**Responsive Text Sizes:**
```tsx
<h1 className="text-3xl lg:text-5xl">
  {/* Smaller on mobile, larger on desktop */}
</h1>
```

---

## 🎨 Special Effects

### Gradient Backgrounds

**Section backgrounds:**
```tsx
<div className="bg-gradient-to-br from-primary/5 to-secondary/5">
  {/* Subtle gradient background */}
</div>
```

**Animated gradients (Final CTA):**
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse"></div>
```

### Backdrop Blur

**For cards with layered backgrounds:**
```tsx
<div className="bg-background/50 backdrop-blur-sm">
  {/* Semi-transparent with blur */}
</div>
```

### Shadows

```tsx
className="shadow-sm"       // Subtle shadow
className="shadow-md"       // Medium shadow
className="shadow-lg"       // Large shadow (on hover)
```

---

## 📐 Component-Specific Patterns

### Hero Carousel

**Structure:**
```tsx
<div className="relative">
  {/* Slides */}
  {slides.map((slide, index) => (
    <div key={index} className={isActive ? "block" : "hidden"}>
      {/* Slide content */}
    </div>
  ))}
  
  {/* Navigation dots */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
    {slides.map((_, index) => (
      <button key={index} className={isActive ? "..." : "..."} />
    ))}
  </div>
</div>
```

### Credentials Stats

**Card pattern:**
```tsx
<div className="text-center">
  <div className="text-4xl font-bold text-foreground mb-2">
    {stat.number}
  </div>
  <div className="text-sm text-muted-foreground">
    {stat.label}
  </div>
</div>
```

### Service Detail

**Section structure:**
```tsx
<div id={service.id} className="scroll-mt-24">
  <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24">
    {/* Header with icon */}
    {/* Purpose */}
    {/* Two-column: Context | Delivers */}
    {/* How It Works (highlighted) */}
    {/* Two-column: Value | Tooling */}
  </div>
</div>
```

**Highlighted "How It Works":**
```tsx
<div className="mb-12 relative">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl -z-10"></div>
  <div className="p-8">
    {/* Content */}
  </div>
</div>
```

---

## 🔤 Content Formatting

### Uppercase Labels

**For section headers:**
```tsx
<h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
  Section Label
</h3>
```

### Emphasis

```tsx
// Bold for important terms
<strong className="font-semibold text-foreground">Important</strong>

// Italic for emphasis (rare)
<em>Emphasized text</em>

// Code snippets (if needed)
<code className="px-2 py-1 bg-muted rounded text-sm font-mono">
  code
</code>
```

### Links

```tsx
// Internal navigation (button style)
<Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
  View Services
</Link>

// Text link
<Link href="/services" className="text-primary hover:text-primary/80 underline">
  Learn more
</Link>
```

---

## 🎯 Accessibility Patterns

### Semantic HTML

**Use proper heading hierarchy:**
```tsx
<h1> // Page title (one per page)
<h2> // Main sections
<h3> // Subsections
<h4> // Minor sections
```

**Use semantic elements:**
```tsx
<nav>        // Navigation
<main>       // Main content
<section>    // Sections
<article>    // Independent content
<aside>      // Sidebar content
```

### ARIA Labels

**For icon buttons:**
```tsx
<button aria-label="Navigate to services section">
  <Icon />
</button>
```

**For navigation:**
```tsx
<nav aria-label="Section navigation">
  {/* Nav items */}
</nav>
```

### Keyboard Navigation

**All interactive elements must be:**
- Focusable (tab-index if needed)
- Visible when focused (focus:outline-*)
- Activatable (Enter/Space)

**Example:**
```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
  Click me
</button>
```

### Color Contrast

**Ensure sufficient contrast:**
- Foreground text: High contrast
- Muted foreground: Still readable
- Test with tools (WCAG AA minimum)

---

## ⚠️ Common Pitfalls

### Don't Mix Background Colors Randomly
❌ Wrong: white → white or gray → gray
✅ Right: white → gray → white → gray

### Don't Hardcode Colors
❌ Wrong: `className="text-blue-600"`
✅ Right: `className="text-primary"`

### Don't Ignore Responsive Design
❌ Wrong: Fixed pixel widths
✅ Right: Responsive grids and breakpoints

### Don't Create Inconsistent Spacing
❌ Wrong: Random margins (mb-7, mb-9, etc.)
✅ Right: Standard margins (mb-6, mb-8, mb-12, mb-16)

### Don't Forget Icon Sizes
❌ Wrong: Inconsistent icon sizes
✅ Right: Standardized sizes (w-4, w-5, w-6, w-8)

---

## 📊 Design Review Checklist

Before considering any page complete, verify:

### Visual Consistency
- [ ] Uses Section component for all sections
- [ ] Uses SectionHeader for all section titles
- [ ] Background colors alternate properly
- [ ] Spacing matches standards (py-24, gap-12, mb-12)
- [ ] Icons have proper sizes and colored backgrounds
- [ ] Cards use gradient + backdrop blur pattern

### Typography
- [ ] Headings use proper hierarchy
- [ ] Text colors use foreground/muted-foreground
- [ ] Font sizes consistent with existing pages
- [ ] Line height appropriate (leading-relaxed for body)

### Responsive Design
- [ ] Works on mobile (< 640px)
- [ ] Works on tablet (640-1024px)
- [ ] Works on desktop (≥ 1024px)
- [ ] Grids stack properly on mobile
- [ ] Touch targets adequate (min 44x44px)

### Accessibility
- [ ] Semantic HTML used
- [ ] Proper heading hierarchy
- [ ] ARIA labels where needed
- [ ] Keyboard navigable
- [ ] Focus states visible

### Code Quality
- [ ] No hardcoded content (uses JSON)
- [ ] Reuses existing components
- [ ] TypeScript types correct
- [ ] No duplication
- [ ] Follows established patterns

---

## 🎓 Learning from Examples

### Best References

**Homepage:**
- Hero carousel pattern
- Value proposition cards
- Approach alternating layout
- Services overview cards
- Credentials stats
- Final CTA

**Services Page:**
- Overview with SectionHeader
- Service preview cards grid
- Service detail component
- Floating navigation integration

**When building new pages:**
1. Look at similar sections on existing pages
2. Copy the pattern
3. Adapt content
4. Maintain consistency

---

## 📝 Design System Updates

### When to Update This Document

1. **New Component Pattern** - Add to appropriate section
2. **New Layout Pattern** - Add example and explanation
3. **New Color Usage** - Document in Color System
4. **New Spacing Standard** - Add to Spacing System
5. **Breaking Change** - Update examples and mark old pattern as deprecated

### How to Update

1. Add new section or subsection
2. Include code example
3. Show visual example if possible
4. Note where it's used
5. Update "Last Updated" date at top

---

**Remember:** Consistency is key. When in doubt, copy an existing pattern rather than inventing a new one.

---

**Last Updated:** December 22, 2025  
**Next Review:** After completing Approach page  
**Status:** Active and complete for current pages
