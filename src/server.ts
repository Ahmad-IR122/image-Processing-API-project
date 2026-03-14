import express from 'express';
import path from 'path';
import imagesRouter from './routes/api/images';

const app = express();

app.get('/', (_req, res) => {
  res.send(
    'Welcome to the Image Processing API. Use /api/images to process your images.'
  );
});

app.use('/api/images', imagesRouter);

const thumbDir = path.join(process.cwd(), 'assets/images/thumb');
app.use('/thumb', express.static(thumbDir));

export default app;
