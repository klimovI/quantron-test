const { Router } = require('express');
const {
  clearPreviousHeroImage,
  setHeroStats,
  getHeroStats,
  getHeroImageFilePath,
} = require('../../controllers/superhero');
const heroStatsValidator = require('./heroStatsValidator');
const heroImageUploader = require('./heroImageUploader');

const superheroRouter = Router();

superheroRouter.post('/setHeroStats', heroStatsValidator, async (req, res) => {
  try {
    await setHeroStats(req.body);

    res.json({
      message: 'Stats are set successfully',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

superheroRouter.get('/getHeroStats', async (_req, res) => {
  try {
    const stats = await getHeroStats();

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

superheroRouter.post('/uploadHeroImage', (req, res) => {
  heroImageUploader(req, res, error => {
    if (error) {
      res.status(400).json({ error: error.message });
    } else if (!req.file) {
      res.status(400).json({ error: 'A file was not sent' });
    } else {
      clearPreviousHeroImage(req.file.filename);

      res.json({
        message: 'Image is uploaded successfully',
      });
    }
  });
});

superheroRouter.get('/getHeroImage', async (_req, res) => {
  try {
    const imageFilePath = await getHeroImageFilePath();

    res.sendFile(imageFilePath);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = superheroRouter;
