# ORXU Corporate Website Plan

## Build
- Create Portuguese Home, Company, Products, Services, and Contact pages with a shared responsive navigation and footer.
- Clearly distinguish ORXU-owned products from custom technology work, using only supplied facts and honest development statuses.
- Present Korvex, Maps Leads Finder, and BOWIS with consistent project details and working external links only where supplied.
- Include validated contact fields and a truthful email-client handoff to orxugroup@gmail.com; do not claim server-side delivery.
- Establish an editorial, blue-led visual system with restrained motion, accessible controls, and page-specific SEO metadata.

## Visual direction
A precise, editorial technology identity: deep ink and vivid blue accents, generous but disciplined spacing, oversized Portuguese typography, fine rules, numbered sections, and one original systems-diagram motif. Contemporary reference research points toward clear product storytelling and differentiated project statuses rather than copied templates.

## Technical details
- Use the existing TanStack Start routes and shared route shell; add one route file per page.
- Define colors, typography, and motion tokens in `src/styles.css`.
- Use client-side Zod validation and `mailto:` submission only; no database or email backend is included.
- The official ORXU SVG was not present in the uploaded files. Use a text-only ORXU wordmark until the user supplies the official SVG; do not invent a symbol.
- Verify navigation, form behavior, SEO, and desktop/mobile layouts in the running preview. Do not publish.
