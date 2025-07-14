const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  userName: { type: String, required: true },
  pointsClaimed: { type: Number, required: true },
  claimedAt: { type: Date, default: Date.now },
});

const History = mongoose.model("History", historySchema);

module.exports = History;
