"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageProcessing_1 = __importDefault(require("../../utilities/imageProcessing"));
const router = express_1.default.Router();
router.get('/', async (req, res) => {
    const { imageName, width, height } = req.query;
    if (!imageName) {
        res.status(400).send('Missing required parameter: imageName');
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
        const outputPath = await (0, imageProcessing_1.default)(imageName, widthNum, heightNum);
        res.sendFile(outputPath);
    }
    catch (error) {
        res.status(500).send(`Internal error: ${error}`);
    }
});
exports.default = router;
//# sourceMappingURL=images.js.map