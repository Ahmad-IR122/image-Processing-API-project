import fs from 'fs';
import path from 'path';
import processImage from '../src/utilities/imageProcessing';

const imagesDir = path.join(process.cwd(), 'assets/images');
const thumbDir = path.join(imagesDir, 'thumb');

describe('processImage utility', () => {
  beforeAll(() => {
    if (!fs.existsSync(thumbDir)) fs.mkdirSync(thumbDir, { recursive: true });
  });

  it('generates a resized image file', async () => {
    const output = await processImage('fjord', 200, 200);
    expect(fs.existsSync(output)).toBeTrue();
  });

  it('throws on invalid dimensions', async () => {
    await expectAsync(processImage('fjord', 0, 200)).toBeRejected();
  });

  it('throws when source image not found', async () => {
    await expectAsync(processImage('missing', 100, 100)).toBeRejected();
  });
});
