const express = require('express');
const router = express.Router();
const { getHistory } = require('../controllers/historyController.js');

router.get('/', getHistory);

module.exports = router;
