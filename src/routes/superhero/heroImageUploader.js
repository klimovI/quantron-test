const path = require('path');
const multer = require('multer');
const { dataFolderPath } = require('../../controllers/superhero');

const acceptedTypes = ['image/png', 'image/jpg', 'image/jpeg'];

const fileFilter = (_req, file, callback) => {
  if (acceptedTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error('Invalid file type'), false);
  }
};

const limits = {
  fileSize: 1024 * 1024, // 1 Mb
};

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, dataFolderPath);
  },
  filename: (_req, file, callback) => {
    const extname = path.extname(file.originalname);
    callback(null, `image${extname}`);
  },
});

module.exports = multer({ fileFilter, limits, storage }).single('image');
