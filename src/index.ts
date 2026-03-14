import express from 'express';
import imagesRouter from './routes/api/images';
import path from 'path/win32';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send(
    'Welcome to the Image Processing API. Use /api/images to process your images.'
  );
});
app.use('/api/images', imagesRouter);

app.use('/thumb', express.static(path.resolve(__dirname, '../images/thumb')));

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
export default app;
