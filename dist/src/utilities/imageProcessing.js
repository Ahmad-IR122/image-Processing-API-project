"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const imagesDir = path_1.default.join(process.cwd(), 'assets/images');
const thumbDir = path_1.default.join(imagesDir, 'thumb');
const processImage = async (imageName, width, height) => {
    if (width <= 0 || height <= 0) {
        throw new Error('Width and height must be positive integers.');
    }
    const inputPath = path_1.default.join(imagesDir, `${imageName}.jpg`);
    const outputPath = path_1.default.join(thumbDir, `${imageName}_${width}x${height}.jpg`);
    if (!fs_1.default.existsSync(inputPath)) {
        throw new Error(`Input image not found: ${inputPath}`);
    }
    if (!fs_1.default.existsSync(thumbDir)) {
        fs_1.default.mkdirSync(thumbDir, { recursive: true });
    }
    if (!fs_1.default.existsSync(outputPath)) {
        await (0, sharp_1.default)(inputPath)
            .resize(width, height)
            .jpeg({ quality: 90 })
            .toFile(outputPath);
    }
    return outputPath;
};
exports.default = processImage;
//# sourceMappingURL=imageProcessing.js.map