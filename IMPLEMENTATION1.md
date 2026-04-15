# Luminex Social Website Implementation Plan

## Project Overview
Build a complete single-page agency website for Luminex Social — a hybrid AI Automation and Premium Content Creation agency. Dark, cinematic, premium tech aesthetic with high contrast and HUD-inspired UI elements.

Tagline: "The Convergence of Logic & Narrative."

---

## Design System Setup

### Color Palette (5 colors only)
- **Background (80%)**: #0B0E14 (Obsidian Core)
- **Secondary Surface**: #1E293B (System Slate) — cards, containers
- **Primary Accent**: #6366F1 (Neural Indigo) — CTAs, interactive elements
- **Secondary Accent**: #A855F7 (Creative Violet) — gradients paired with Indigo
- **Special Accent**: #2DD4BF (Cyber Teal) — AI-related elements ONLY

### Typography (3 fonts)
- **Headlines**: Satoshi Bold (Fontshare) — geometric, modernist
- **Technical/UI**: JetBrains Mono — labels, stats, step numbers
- **Body**: Inter Regular

### Visual Elements
- Deep #0B0E14 backgrounds with soft radial Indigo glow
- Subtle noise texture on background
- Indigo-to-Violet gradients on CTAs
- HUD/terminal-inspired UI in process section
- Motion blur aesthetic in imagery

---

## Implementation Phases

### Phase 1: Foundation (Design System & Layout)
- [ ] Configure Tailwind with custom design tokens (colors, fonts)
- [ ] Setup layout.tsx with font imports (Satoshi, JetBrains Mono, Inter)
- [ ] Create reusable component structure
- [ ] Setup globals.css with theme tokens and noise texture background

### Phase 2: Navigation & Hero
- [ ] Build sticky navbar with logo, links, gradient CTA
- [ ] Create hero section with H1, code-comment subline, dual CTAs
- [ ] Add infinite auto-scrolling client logo marquee
- [ ] Implement stats bar (4 stats with mono styling)

### Phase 3: Services & Portfolio
- [ ] Build 3 service cards (Short Form, Long Form, AI Automation)
- [ ] Create portfolio grid with filter tabs (All, Short Form, Long Form, Branded)
- [ ] Add hover effects (scale + glow)
- [ ] Responsive grid adjustments (3-col → 1-col mobile)

### Phase 4: Process & Testimonials
- [ ] Build process section with HUD/terminal styling (4 steps)
- [ ] Create testimonials section with quote cards + DM wall
- [ ] Add glow borders and accent lines

### Phase 5: About, CTA & Footer
- [ ] Build about section with split layout
- [ ] Create full-width CTA section with radial glow background
- [ ] Add FAQ accordions with expand icons
- [ ] Build footer with links and social

### Phase 6: Polish & Responsive
- [ ] Mobile-first responsive adjustments
- [ ] Hamburger nav collapse
- [ ] Test all hover states and animations
- [ ] Performance optimization

---

## Section Order & Components

1. **Sticky Navigation** — Logo, links, gradient button
2. **Hero** — H1, subline, dual CTAs, marquee, stats bar
3. **Services** — 3 cards with hover effects
4. **Portfolio** — Filter tabs + masonry grid
5. **Process** — HUD-styled timeline
6. **Testimonials** — Quote cards + DM screenshot wall
7. **About** — Split text/image layout
8. **CTA + FAQ** — Full-width call-to-action + accordion
9. **Footer** — Links, social, copyright

---

## Technical Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS with custom tokens
- Google Fonts (Satoshi, JetBrains Mono, Inter)
- Shadcn/ui components where applicable
- React Marquee for auto-scrolling logos

---

## Notes
- NO pricing tables, login, chatbot, or light-mode toggle
- All text in Pure Signal (#F8FAFC)
- Cyber Teal ONLY for AI service elements
- High contrast dark theme throughout
- Mobile-first responsive approach

