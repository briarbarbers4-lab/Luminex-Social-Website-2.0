#!/bin/bash

# Configure git
git config user.name "v0[bot]"
git config user.email "v0[bot]@users.noreply.github.com"

# Add all changes
git add -A

# Commit changes
git commit -m "Build: Implement Luminex Social website

- Setup design system with dark theme (indigo/violet/teal palette)
- Create responsive navbar with navigation and CTA
- Implement hero section with headline, subline, and dual CTAs
- Add stats section with KPI metrics
- Build services showcase with 3 interactive cards
- Create portfolio section with masonry grid layout
- Implement process timeline with 4 HUD-styled steps
- Add testimonials section with quotes and ratings
- Build about section with split layout
- Create CTA section with FAQ accordion
- Implement footer with links and social icons
- Add comprehensive IMPLEMENTATION1.md plan

Co-authored-by: v0[bot] <v0[bot]@users.noreply.github.com>"

# Push to current branch
git push origin HEAD
