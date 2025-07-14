const express = require("express");
const cors = require("cors");
require("dotenv/config");

const connectDB = require("./config/db.js");
const userRoutes = require('./routes/user.routes.js');
const leaderboardRoutes = require('./routes/leaderboard.routes.js');
const historyRoutes = require('./routes/history.routes.js');

const app = express();
const PORT = process.env.PORT || 4000;

// 🔧 Middleware (move this outside connectDB then update CORS origin check below)
app.use(cors({
  origin: ["https://leaderboard-odsv.onrender.com"],  // ✅ Without trailing slash!
  credentials: true,
}));

app.use(express.json());

// 🔌 API Routes
app.use('/api/users', userRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/history', historyRoutes);

// 🚀 Start server after DB connects
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ DB Connection Error:', err.message);
  });
