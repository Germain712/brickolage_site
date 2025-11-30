#!/usr/bin/env node
/**
 * Simple SVG to PNG converter using Node.js
 * Requires: npm install sharp
 * 
 * Usage: node convert-svg.js
 */

const fs = require('fs');
const path = require('path');

// Try to use sharp if available, otherwise provide instructions
try {
  const sharp = require('sharp');

  async function convertSvgs() {
    try {
      // Convert logo.svg to logo.png (200x200)
      await sharp(path.join(__dirname, 'logo.svg'))
        .png()
        .resize(200, 200, { fit: 'contain', background: { r: 15, g: 15, b: 16, alpha: 1 } })
        .toFile(path.join(__dirname, 'images', 'logo.png'));
      console.log('✓ Generated images/logo.png (200x200)');

      // Convert favicon.svg to favicon.png (192x192)
      await sharp(path.join(__dirname, 'favicon.svg'))
        .png()
        .resize(192, 192, { fit: 'contain', background: { r: 15, g: 15, b: 16, alpha: 1 } })
        .toFile(path.join(__dirname, 'favicon.png'));
      console.log('✓ Generated favicon.png (192x192)');

      // Also create a 32x32 favicon for browser tab
      await sharp(path.join(__dirname, 'favicon.svg'))
        .png()
        .resize(32, 32, { fit: 'contain', background: { r: 15, g: 15, b: 16, alpha: 1 } })
        .toFile(path.join(__dirname, 'favicon-32.png'));
      console.log('✓ Generated favicon-32.png (32x32)');

      console.log('\n✓ All SVG files converted to PNG successfully!');
    } catch (err) {
      console.error('Error converting SVG:', err.message);
      process.exit(1);
    }
  }

  convertSvgs();
} catch (err) {
  console.error('❌ sharp module not found.');
  console.log('\nTo install sharp and convert SVG files, run:');
  console.log('  npm install sharp');
  console.log('  node convert-svg.js');
  console.log('\nAlternatively, you can:');
  console.log('  1. Use an online SVG-to-PNG converter (e.g., https://convertio.co)');
  console.log('  2. Install ImageMagick: brew install imagemagick');
  console.log('  3. Convert manually: convert -density 150 logo.svg -quality 90 images/logo.png');
}
