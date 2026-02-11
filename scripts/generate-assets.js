import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const FAVICON_SVG = path.join(PUBLIC_DIR, 'favicon.svg');
const OG_SVG = path.join(PUBLIC_DIR, 'og-image.svg');

async function generateAssets() {
  console.log('🚀 Generating assets...');

  try {
    await sharp(FAVICON_SVG)
      .resize(180, 180)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
    console.log('✅ Generated apple-touch-icon.png');

    await sharp(OG_SVG)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'og-image.png'));
    console.log('✅ Generated og-image.png');

    const sizes = [16, 32, 48, 192, 512];
    for (const size of sizes) {
      await sharp(FAVICON_SVG)
        .resize(size, size)
        .png()
        .toFile(path.join(PUBLIC_DIR, `favicon-${size}x${size}.png`));
      console.log(`✅ Generated favicon-${size}x${size}.png`);
    }

    console.log('✨ All assets generated successfully!');
  } catch (error) {
    console.error('❌ Error generating assets:', error);
  }
}

generateAssets();
