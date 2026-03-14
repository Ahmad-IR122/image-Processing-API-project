'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const images_1 = __importDefault(require('./routes/api/images'));
const win32_1 = __importDefault(require('path/win32'));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
  res.send(
    'Welcome to the Image Processing API. Use /api/images to process your images.'
  );
});
app.use('/api/images', images_1.default);
app.use(
  '/thumb',
  express_1.default.static(
    win32_1.default.resolve(__dirname, '../images/thumb')
  )
);
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map
