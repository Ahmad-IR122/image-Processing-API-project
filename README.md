# Image Processing API

## Project Description

This project is a Node.js + Express + TypeScript API that resizes images on demand using Sharp. It reads source images from `assets/images`, creates cached thumbnails in `assets/images/thumb`, and serves the processed image back to the client.

# Features

- Resize images on the fly.
- Cache resized images to improve performance.
- Validation for missing/invalid parameters.
- Automated tests with Jasmine & Supertest.

## File Structure

```text
image-Processing-API-project/
  assets/
    images/
      encenadaport.jpg
      fjord.jpg
      icelandwaterfall.jpg
      palmtunnel.jpg
      santamonica.jpg
      thumb/               # cached resized images are generated here
  dist/                    # compiled JS output (after build)
  spec/
    apiSpec.ts
    imageSpec.ts
  src/
    index.ts               # app entry point
    routes/
      api/
        images.ts          # /api/images route
    utilities/
      imageProcessing.ts   # Sharp resize logic + cache
  package.json
  tsconfig.json
```

## Usage

Base URL: `http://localhost:3000`

Endpoint: `GET /api/images`

Required query parameters: `imageName` (without extension, e.g. `fjord`), `width` (positive integer), `height` (positive integer).

Example:

```bash
curl "http://localhost:3000/api/images?imageName=fjord&width=200&height=200"
```

Optional static access to cached thumbnails: `GET /thumb/<imageName>_<width>x<height>.jpg` (example: `http://localhost:3000/thumb/fjord_200x200.jpg`).

## How To Run And Test

Install dependencies:

```bash
npm install
```

Run in development (auto-reload):

```bash
npm run dev
```

Build and start the production server:

```bash
npm run build
npm start
```

Run tests:

```bash
npm test
```

## Project Conclusion

The API provides a clean, testable pipeline for resizing and caching images. It validates inputs, generates thumbnails only once per size, and exposes a simple HTTP interface that can be extended with additional formats or routes.
