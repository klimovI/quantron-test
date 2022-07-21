const fs = require('fs');
const path = require('path');

const dataFolderPath = path.resolve(__dirname, '__data');
const statsFilePath = path.resolve(dataFolderPath, 'stats.json');

// a folder is used to store hero data as there is no database
if (!fs.existsSync(dataFolderPath)) {
  fs.mkdirSync(dataFolderPath);
}

// tores hero stats as a json file
const setHeroStats = async stats => {
  try {
    await fs.promises.writeFile(statsFilePath, JSON.stringify(stats));
  } catch (error) {
    console.error(error);
    throw new Error('Cannot set stats');
  }
};

// reads hero stats from a json file
const getHeroStats = async () => {
  try {
    const statsJSON = await fs.promises.readFile(statsFilePath);
    return JSON.parse(statsJSON);
  } catch (error) {
    console.error(error);
    throw new Error('Stats are not set');
  }
};

// finds a hero image file path
const getHeroImageFilePath = async () => {
  const fileNames = await fs.promises.readdir(dataFolderPath);
  const imageFileName = fileNames.find(fileName => fileName.startsWith('image'));

  if (!imageFileName) {
    throw new Error('Image is not set');
  }

  return path.resolve(dataFolderPath, imageFileName);
};

// removes a previous hero image file (if exists), keeps 'currentFileName'
const clearPreviousHeroImage = async currentFileName => {
  const fileNames = await fs.promises.readdir(dataFolderPath);

  fileNames.forEach(fileName => {
    if (fileName !== currentFileName && fileName.startsWith('image')) {
      const filePath = path.resolve(dataFolderPath, fileName);

      fs.unlink(filePath, error => {
        if (error) console.error(error);
      });
    }
  });
};

module.exports = {
  dataFolderPath,
  setHeroStats,
  getHeroStats,
  clearPreviousHeroImage,
  getHeroImageFilePath,
};
