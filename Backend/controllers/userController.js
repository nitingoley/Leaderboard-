const User = require("../models/User.model.js");
const History = require("../models/History.model.js");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });

    const newUser = new User({ name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Claim random points

exports.claimPoints = async (req, res) => {
  try {
    const { userId } = req.params;
    const points = Math.floor(Math.random() * 10) + 1;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.totalPoints += points;
    await user.save();

    const history = new History({
      userId: user._id,
      userName: user.name,
      pointsClaimed: points,
    });

    await history.save();

    res.json({ user, points });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};