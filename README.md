
# K. T. CHAN & CO. — Full-width Contact sections

- Contact sections (EN / 繁體 / 简体) are now **full-width** (full-bleed) using a `width:100vw` band that breaks out of the centered container while keeping inner content aligned.
- Maps and details sit inside a `container` within the full-bleed band.

Deploy by replacing your current `index.html` with this one.

Key Enhancements Added:
1. Scroll-Triggered Animations
Added Intersection Observer to detect when elements enter the viewport and trigger animations
All section headings, text blocks, and cards now animate in (fade + slide up) as users scroll
Animations are smooth (0.8s duration) with staggered timing for natural flow

2. Interactive Backgrounds
Hero section has an animated gradient background (slow, subtle color shift)
Subtle patterned overlay on hero section that fades in on load
Navigation bar changes style (shadow + slight padding reduction) when scrolling down

3. Hover Interactions
Cards lift up and show enhanced shadow on hover
Language switch buttons have subtle hover effects (lift + border color change)
Navigation links have underlined hover effect with smooth transition
Call-to-action button has hover lift + color change
Chips (Independent/Client-focused/Bilingual) have hover effects
Map iframe scales slightly on card hover

4. Smooth Transitions
Global scroll-behavior: smooth for anchor link navigation
All interactive elements have 0.3s transition for smooth state changes
Language switch preserves animations (re-initializes after switch)

5. Performance & Compatibility
Animations use hardware-accelerated properties (transform/opacity)
Intersection Observer is efficient (better than scroll event listeners)
All animations are responsive and work on mobile devices
Preserved all original language switching functionality

Additional Notes:
The animations are subtle and professional (appropriate for a law firm) – not overly flashy
All motion effects respect the site's color scheme and brand identity
Animations work across all three language versions (EN/TC/SC)
The code maintains responsiveness and accessibility (ARIA labels preserved)