const fs = require('fs');
const path = require('path');

const dataFolderPath = path.resolve(__dirname, '__data');
const statsFilePath = path.resolve(dataFolderPath, 'stats.json');

if (!fs.existsSync(dataFolderPath)) {
  fs.mkdirSync(dataFolderPath);
}

const setHeroStats = async stats => {
  try {
    await fs.promises.writeFile(statsFilePath, JSON.stringify(stats));
  } catch (error) {
    console.error(error);
    throw new Error('Cannot set stats');
  }
};

const getHeroStats = async () => {
  try {
    const statsJSON = await fs.promises.readFile(statsFilePath);
    return JSON.parse(statsJSON);
  } catch (error) {
    console.error(error);
    throw new Error('Stats are not set');
  }
};

const getHeroImageFilePath = async () => {
  const fileNames = await fs.promises.readdir(dataFolderPath);
  const imageFileName = fileNames.find(fileName => fileName.startsWith('image'));

  if (!imageFileName) {
    throw new Error('Image is not set');
  }

  return path.resolve(dataFolderPath, imageFileName);
};

const clearPreviousHeroImage = () => {
  const fileNames = await fs.promises.readdir(dataFolderPath);
  const imageFileName = fileNames.find(fileName => fileName.startsWith('image'));
};

module.exports = {
  dataFolderPath,
  setHeroStats,
  getHeroStats,
  clearPreviousHeroImage,
  getHeroImageFilePath,
};
