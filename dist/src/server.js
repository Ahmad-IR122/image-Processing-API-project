"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const images_1 = __importDefault(require("./routes/api/images"));
const app = (0, express_1.default)();
app.get('/', (_req, res) => {
    res.send('Welcome to the Image Processing API. Use /api/images to process your images.');
});
app.use('/api/images', images_1.default);
const thumbDir = path_1.default.join(process.cwd(), 'assets/images/thumb');
app.use('/thumb', express_1.default.static(thumbDir));
exports.default = app;
//# sourceMappingURL=server.js.map