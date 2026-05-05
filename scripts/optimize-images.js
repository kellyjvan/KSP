/**
 * Image Optimization Script for Klamath Sportsman's Park
 * ======================================================
 *
 * PURPOSE:
 *   Converts raw photos (JPG, PNG, TIFF, BMP, WebP) into optimized WebP images
 *   for use on the website. Images are resized to a max width, compressed, and
 *   renamed with a consistent naming convention.
 *
 * HOW IT WORKS:
 *   1. Scans all subfolders inside ./raw-photos/ for image files.
 *   2. Each subfolder becomes a category (e.g., "camping", "archery", "rc").
 *   3. Images are converted to WebP format using the Sharp library.
 *   4. Output files are named using the folder name as a prefix with a sequential
 *      number suffix. For example, if the folder is named "camping" and contains
 *      3 images, the outputs will be:
 *        camping_1.webp, camping_2.webp, camping_3.webp
 *   5. Images are sorted alphabetically by their original filename before numbering,
 *      so the order is deterministic and repeatable.
 *   6. If an output file already exists, it is SKIPPED (not overwritten). To
 *      re-process images, delete the existing .webp files in the output folder first.
 *
 * CONFIGURATION:
 *   - INPUT:    Source folder containing subfolders of raw images (default: ./raw-photos)
 *   - OUTPUT:   Destination folder for optimized images (default: ./static/images)
 *   - MAX_WIDTH: Maximum pixel width; images wider than this are downscaled proportionally.
 *               Images smaller than this are left at their original size.
 *   - QUALITY:  Default WebP quality (1-100). Lower = smaller file, more compression artifacts.
 *               Current default is 13, which is aggressive but acceptable for outdoor photos.
 *   - QUALITY_OVERRIDES: Per-folder quality overrides. Use this when certain image sets
 *               need higher quality (e.g., RC aircraft PNGs that are already small).
 *               The key is the folder name, the value is the quality (1-100).
 *
 * ADDING NEW PHOTOS:
 *   1. Create a new folder inside ./raw-photos/ with a descriptive name.
 *      The folder name becomes the prefix for all output filenames.
 *      Example: mkdir raw-photos/camping
 *
 *   2. Place your raw image files (JPG, PNG, etc.) into that folder.
 *      Filenames don't matter — they will be sorted alphabetically and renamed.
 *
 *   3. (Optional) If the images need a different quality than the default (13),
 *      add an entry to QUALITY_OVERRIDES below. Example:
 *        const QUALITY_OVERRIDES = { rc: 100, camping: 30 };
 *
 *   4. Run the script:
 *        node scripts/optimize-images.js
 *
 *   5. Optimized images will appear in ./static/images/<folder_name>/
 *      Named as: <folder_name>_1.webp, <folder_name>_2.webp, etc.
 *
 *   6. Wire up the images in your Svelte page component:
 *        const images = [
 *          { src: '/images/camping/camping_1.webp', alt: 'Camping area view 1' },
 *          { src: '/images/camping/camping_2.webp', alt: 'Camping area view 2' },
 *        ];
 *
 * RE-PROCESSING IMAGES:
 *   The script skips files that already exist. To re-process (e.g., after changing
 *   quality settings), delete the existing output files first:
 *     - PowerShell: Remove-Item "static\images\camping\*.webp" -Force
 *     - Then re-run: node scripts/optimize-images.js
 *
 * DEPENDENCIES:
 *   - sharp (npm install --save-dev sharp)
 */

import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync, statSync } from 'fs';
import { join, extname } from 'path';

// --- Configuration ---
const INPUT = './raw-photos';
const OUTPUT = './static/images';
const MAX_WIDTH = 1400;
const QUALITY = 13;

// Per-folder quality overrides. Key = folder name, value = quality (1-100).
// Folders not listed here use the default QUALITY above.
const QUALITY_OVERRIDES = {
  rc: 100,
  camping: 60
};

const imagePattern = /\.(jpg|jpeg|png|webp|tiff|bmp)$/i;

// --- Collect all images grouped by folder ---
// Each entry in the queue includes the folder name so we can use it as the output prefix.
// Images within each folder are sorted alphabetically for deterministic numbering.
const folderQueues = {};

function scanFolder(inputDir, outputDir) {
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const entries = readdirSync(inputDir);

  for (const entry of entries) {
    const inputPath = join(inputDir, entry);
    const stat = statSync(inputPath);

    if (stat.isDirectory()) {
      scanFolder(inputPath, join(outputDir, entry));
    } else if (imagePattern.test(entry)) {
      const folder = inputDir.replace(/\\/g, '/').split('/').pop();
      if (!folderQueues[folder]) {
        folderQueues[folder] = { outputDir, files: [] };
      }
      folderQueues[folder].files.push({ inputPath, fileName: entry });
    }
  }
}

scanFolder(INPUT, OUTPUT);

// Sort each folder's files alphabetically and assign sequential numbers
const queue = [];
for (const [folder, { outputDir, files }] of Object.entries(folderQueues)) {
  files.sort((a, b) => a.fileName.localeCompare(b.fileName));
  files.forEach((file, index) => {
    const outputName = `${folder}_${index + 1}.webp`;
    queue.push({ ...file, outputDir, folder, outputName });
  });
}

if (queue.length === 0) {
  console.log('No images found in ./raw-photos/');
  process.exit(0);
}

console.log(`Processing ${queue.length} image(s)...\n`);

let totalInputKB = 0;
let totalOutputKB = 0;

for (const { inputPath, outputDir, folder, outputName } of queue) {
  const outputPath = join(outputDir, outputName);

  if (existsSync(outputPath)) {
    console.log(`  SKIP: ${outputName} already exists`);
    continue;
  }

  try {
    const meta = await sharp(inputPath).metadata();
    const inputKB = meta.size ? meta.size / 1024 : 0;
    const quality = QUALITY_OVERRIDES[folder] || QUALITY;

    const result = await sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);

    const outputKB = result.size / 1024;
    totalInputKB += inputKB;
    totalOutputKB += outputKB;

    const relInput = inputPath.replace(/\\/g, '/');
    console.log(`  ${relInput} -> ${outputName}  (${inputKB.toFixed(0)}KB -> ${outputKB.toFixed(0)}KB) [quality: ${quality}]`);
  } catch (err) {
    console.error(`  FAILED: ${inputPath} - ${err.message}`);
  }
}

const reduction = totalInputKB > 0 ? ((1 - totalOutputKB / totalInputKB) * 100).toFixed(0) : 0;
console.log(`\nTotal: ${totalInputKB.toFixed(0)}KB -> ${totalOutputKB.toFixed(0)}KB (${reduction}% reduction)`);
console.log('Done! Optimized images are in ./static/images/');
