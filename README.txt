BRICK-O-LAGE Construction — Static Marketing Site

Overview
BRICK-O-LAGE Construction is a responsive static website for a construction and masonry service based in Dominica. 
The site features a clean, modern design with smooth animations, accessible navigation, and a contact form for inquiries.

Pages
- index.html — Homepage with hero section, services overview, about section, and call-to-action.
- gallery.html — Project gallery displaying completed work and portfolio images.
- contact.html — Contact form (powered by Formspree) and direct contact information.

Key Features
- Responsive Design: Mobile-first layout that works seamlessly on all device sizes.
- Accessible Navigation: Mobile menu with keyboard support (Tab trap, Escape to close, focus management).
- Smooth Animations: Subtle fade-ins, slide-down effects, and hover animations throughout.
- Branded Visuals: Custom logo and favicon with gradient backgrounds.
- Touch-Friendly: Optimized for mobile interactions with proper focus states and larger touch targets.
- No Backend Required: Contact form integrates with Formspree (or can be switched to Netlify Forms).

Project Structure
- index.html, gallery.html, contact.html — Main pages.
- css/style.css — All styling, animations, and responsive breakpoints.
- js/menu.js — Shared accessible menu toggle script.
- logo.svg, favicon.svg — Vector assets (editable).
- images/logo.png, favicon.png, favicon-32.png — Raster versions of logo and favicon.
- images/ — Contains business card images and placeholder images for gallery.
- convert-svg.js — Helper script to regenerate PNG assets from SVGs.

How to Preview Locally
1. Open index.html in your browser (double-click or drag into browser).
2. Alternatively, use Live Server in VS Code for a local development server.
3. Test responsive behavior: Use your browser's device toolbar (F12 → device mode) to simulate mobile screens.
4. Test the mobile menu: Resize to mobile width, click Menu, verify keyboard navigation (Tab, Escape).

Contact Form Setup
The contact form is configured to post to Formspree (formspree.io/f/maylvkkn). 
To receive submissions:
1. Sign up at formspree.io and verify your email.
2. Alternatively, replace the form action with Netlify Forms, EmailJS, or your own backend.

Customization
- Colors: Edit CSS variables in css/style.css (:root section).
- Logo & Favicon: Update logo.svg and favicon.svg, then regenerate PNGs.
- Content: Edit HTML text directly in index.html, gallery.html, contact.html.
- Animations: Adjust timing and effects in css/style.css (@keyframes and transition durations).

Regenerating Assets (PNG from SVG)
If you modify the SVG files, regenerate the PNG versions:

Using ImageMagick (macOS/Homebrew):
  brew install imagemagick
  magick -density 150 logo.svg -quality 90 images/logo.png
  magick -density 150 favicon.svg -quality 90 favicon.png
  magick -density 150 favicon.svg -resize 32x32 -quality 90 favicon-32.png

Using Node.js (cross-platform):
  npm install sharp
  node convert-svg.js

Deployment
Deploy to any static hosting:
- Netlify: Drag and drop the folder or connect your Git repo.
- Vercel: Similar process to Netlify.
- GitHub Pages: Push to gh-pages branch.
- Traditional hosting: FTP or upload all files to your web server root.

Browser Support
- All modern browsers (Chrome, Firefox, Safari, Edge).
- Mobile browsers (iOS Safari, Chrome Mobile, Firefox Mobile).
- Animations gracefully degrade in older browsers.

