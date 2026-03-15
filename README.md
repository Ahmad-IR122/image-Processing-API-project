# 🖼️ Image Processing API

A simple and efficient **Node.js + Express + TypeScript API** for resizing images on demand using **Sharp**.
The API reads original images from `assets/images`, generates resized versions, stores them in a cache folder, and returns the processed image to the client. ⚡

---

## ✨ Project Description

This project was built to provide an easy way to resize images dynamically through an API endpoint.
Instead of creating multiple image sizes manually, the server handles image processing automatically and caches the results for faster future requests.

---

## 🚀 Features

* 📏 Resize images on the fly
* ⚡ Cache resized images for better performance
* ✅ Validate missing or invalid query parameters
* 🧪 Automated testing with **Jasmine** and **Supertest**
* 🗂️ Organized project structure using **TypeScript**

---

## 📁 File Structure

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
    index.ts               # server startup
    server.ts              # Express app setup
    routes/
      api/
        images.ts          # /api/images route
    utilities/
      imageProcessing.ts   # Sharp resize logic + cache
  package.json
  tsconfig.json
```

---

## 🛠️ Usage

### Base URL

```bash
http://localhost:3000
```

### Endpoint

```bash
GET /api/images
```

### Required Query Parameters

* `imageName` → image name without extension
  Example: `fjord`
* `width` → positive integer
* `height` → positive integer

### Example Request

```bash
curl "http://localhost:3000/api/images?imageName=fjord&width=300&height=300"
```

### Example in Browser

```bash
http://localhost:3000/api/images?imageName=fjord&width=300&height=300
```

---

## 🖼️ Cached Thumbnails

The API also allows access to generated thumbnails directly from the cache folder.

### Example

```bash
GET /thumb/<imageName>_<width>x<height>.jpg
```

Example URL:

```bash
http://localhost:3000/thumb/fjord_200x200.jpg
```

---

## ▶️ How To Run The Project

### 1) Install dependencies

```bash
npm install
```

### 2) Run in development mode

```bash
npm run dev
```

### 3) Build the project

```bash
npm run build
```

### 4) Start the production server

```bash
npm start
```

---

## 🧪 Run Tests

To execute all tests:

```bash
npm test
```

---

## ✅ Validation Rules

The API checks for:

* Missing filename
* Missing width or height
* Non-numeric values
* Negative or zero values
* Requesting an image that does not exist

This helps make the API more reliable and user-friendly. 🔒

---

## 💡 Example Workflow

1. The client sends a request with `filename`, `width`, and `height`
2. The server checks if a resized version already exists in `thumb/`
3. If it exists, the cached image is returned immediately ⚡
4. If not, the image is resized using **Sharp**
5. The new thumbnail is saved and then returned to the client

---

## 📦 Technologies Used

* **Node.js**
* **Express**
* **TypeScript**
* **Sharp**
* **Jasmine**
* **Supertest**
* **ESLint**
* **Prettier**

---

## 🎯 Project Conclusion

This API provides a clean and testable solution for image resizing and caching.
It improves performance by avoiding repeated processing for the same image size and offers a simple HTTP interface that can be expanded in the future with more features such as additional formats, quality controls, or new routes. 🚀
