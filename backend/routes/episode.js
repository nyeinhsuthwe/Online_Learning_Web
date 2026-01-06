const express = require('express');
const EpisodeController = require('../controllers/EpisodeController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.post('/create-episode', upload.single("videoUrl"),EpisodeController.create)
router.delete('/delete-episode/:id', EpisodeController.delete)
router.get('/get-episode-list', EpisodeController.EpisodeList)



module.exports = router