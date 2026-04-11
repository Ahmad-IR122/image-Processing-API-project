# 🖼️ Image Processing API

A simple and efficient **Node.js + Express + TypeScript API** for resizing images on demand using **Sharp**.
The API reads original images from `assets/images`, generates resized versions, stores them in a cache folder, and returns the processed image to the client. ⚡

---

## ✨ Features

* 📏 Resize images on the fly
* ⚡ Cache resized images for better performance
* ✅ Validate missing or invalid query parameters
* 🧪 Automated testing with **Jasmine** and **Supertest**
* 🗂️ Organized project structure using **TypeScript**

---

## 📋 Prerequisites

* **Node.js** v18 or higher
* **npm** v8 or higher

---

## 📁 Project Structure

```text
image-Processing-API-project/
├── assets/
│   └── images/
│       ├── encenadaport.jpg
│       ├── fjord.jpg
│       ├── icelandwaterfall.jpg
│       ├── palmtunnel.jpg
│       ├── santamonica.jpg
│       └── thumb/               # cached resized images (auto-generated)
├── dist/                        # compiled JS output (after build)
├── spec/
│   ├── apiSpec.ts
│   └── imageSpec.ts
├── src/
│   ├── index.ts                 # server entry point
│   ├── server.ts                # Express app setup
│   ├── routes/
│   │   └── api/
│   │       └── images.ts        # GET /api/images route handler
│   └── utilities/
│       └── imageProcessing.ts   # Sharp resize logic + cache check
├── package.json
└── tsconfig.json
```

---

## ▶️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development mode

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Start the production server

```bash
npm start
```

---

## 🛠️ API Usage

### Base URL

```
http://localhost:3000
```

### Resize Image

```
GET /api/images
```

| Parameter   | Type    | Required | Description                         |
|-------------|---------|----------|-------------------------------------|
| `imageName` | string  | ✅        | Image filename without extension    |
| `width`     | integer | ✅        | Target width in pixels (positive)   |
| `height`    | integer | ✅        | Target height in pixels (positive)  |

**cURL example:**

```bash
curl "http://localhost:3000/api/images?imageName=fjord&width=300&height=300"
```

**Browser example:**

```
http://localhost:3000/api/images?imageName=fjord&width=300&height=300
```

### Access a Cached Thumbnail Directly

```
GET /thumb/<imageName>_<width>x<height>.jpg
```

**Example:**

```
http://localhost:3000/thumb/fjord_300x300.jpg
```

---

## 💡 Request Workflow

1. Client sends a `GET /api/images` request with `imageName`, `width`, and `height`
2. Server validates all query parameters
3. If a matching thumbnail already exists in `thumb/`, it is returned immediately ⚡
4. Otherwise, the image is resized using **Sharp**, saved to `thumb/`, and returned to the client

---

## ✅ Validation Rules

The API returns a descriptive error response when:

* `imageName`, `width`, or `height` is missing
* `width` or `height` is not a positive integer
* The requested image does not exist in `assets/images`

---

## 🧪 Running Tests

```bash
npm test
```

---

## 🔧 Other Scripts

| Script          | Command             | Description                        |
|-----------------|---------------------|------------------------------------|
| Lint            | `npm run lint`      | Run ESLint on TypeScript sources   |
| Format          | `npm run format`    | Auto-format code with Prettier     |

---

## 📦 Technologies

| Category    | Technology                  |
|-------------|-----------------------------|
| Runtime     | Node.js                     |
| Framework   | Express                     |
| Language    | TypeScript                  |
| Image       | Sharp                       |
| Testing     | Jasmine, Supertest          |
| Code Quality| ESLint, Prettier            |
