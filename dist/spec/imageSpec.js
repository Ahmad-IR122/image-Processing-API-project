"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const imageProcessing_1 = __importDefault(require("../src/utilities/imageProcessing"));
const imagesDir = path_1.default.join(process.cwd(), 'assets/images');
const thumbDir = path_1.default.join(imagesDir, 'thumb');
describe('processImage utility', () => {
    beforeAll(() => {
        if (!fs_1.default.existsSync(thumbDir))
            fs_1.default.mkdirSync(thumbDir, { recursive: true });
    });
    it('generates a resized image file', async () => {
        const output = await (0, imageProcessing_1.default)('fjord', 200, 200);
        expect(fs_1.default.existsSync(output)).toBeTrue();
    });
    it('throws on invalid dimensions', async () => {
        await expectAsync((0, imageProcessing_1.default)('fjord', 0, 200)).toBeRejected();
    });
    it('throws when source image not found', async () => {
        await expectAsync((0, imageProcessing_1.default)('missing', 100, 100)).toBeRejected();
    });
});
//# sourceMappingURL=imageSpec.js.map