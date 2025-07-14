const User = require('../models/User.model.js');

// Get leaderboard sorted by totalPoints
exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    const leaderboard = users.map((user, index) => ({
      rank: index + 1,
      name: user.name,
      totalPoints: user.totalPoints,
    }));
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
