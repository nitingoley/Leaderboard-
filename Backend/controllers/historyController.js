const History = require('../models/History.model.js');

// Get claim history
exports.getHistory = async (req, res) => {
  try {
    const history = await History.find().sort({ claimedAt: -1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
