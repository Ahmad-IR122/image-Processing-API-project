import express, { Request, Response } from 'express';
import processImage from '../../utilities/imageProcessing';

const router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
  const { imageName, filename, width, height } = req.query;
  const resolvedName =
    typeof imageName === 'string'
      ? imageName
      : typeof filename === 'string'
        ? filename
        : undefined;

  if (!resolvedName) {
    res.status(400).send('Missing required parameter: imageName or filename');
    return;
  }

  if (!width || !height) {
    res.status(400).send('Missing required parameters: width and/ or height');
    return;
  }

  const widthNum = Number(width);
  const heightNum = Number(height);

  if (!Number.isFinite(widthNum) || !Number.isFinite(heightNum)) {
    res.status(400).send('Width and height must be valid numbers');
    return;
  }

  if (widthNum <= 0 || heightNum <= 0) {
    res.status(400).send('Width and height must be positive integers');
    return;
  }

  try {
    const outputPath = await processImage(resolvedName, widthNum, heightNum);
    res.sendFile(outputPath);
  } catch (error) {
    const message = error instanceof Error ? error.message : `${error}`;
    if (message.startsWith('Input image not found')) {
      res.status(404).send(message);
      return;
    }
    res.status(500).send(message);
  }
});

export default router;
