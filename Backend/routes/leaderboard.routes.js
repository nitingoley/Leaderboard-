const express = require('express');
const router = express.Router();
const { getLeaderboard } = require('../controllers/leaderboardController.js');

router.get('/', getLeaderboard);

module.exports = router;
