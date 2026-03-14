import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const imagesDir = path.join(process.cwd(), 'assets/images');
const thumbDir = path.join(imagesDir, 'thumb');

const processImage = async (
  imageName: string,
  width: number,
  height: number
): Promise<string> => {
  if (width <= 0 || height <= 0) {
    throw new Error('Width and height must be positive integers.');
  }

  const inputPath = path.join(imagesDir, `${imageName}.jpg`);
  const outputPath = path.join(thumbDir, `${imageName}_${width}x${height}.jpg`);

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input image not found: ${inputPath}`);
  }

  if (!fs.existsSync(thumbDir)) {
    fs.mkdirSync(thumbDir, { recursive: true });
  }

  if (!fs.existsSync(outputPath)) {
    await sharp(inputPath).resize(width, height).jpeg({ quality: 90 }).toFile(outputPath);
  }
  
  return outputPath;
};

export default processImage;
