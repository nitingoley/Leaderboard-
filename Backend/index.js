const express = require("express");
const cors = require("cors");
require("dotenv/config");

const connectDB = require("./config/db.js");
const userRoutes = require('./routes/user.routes.js');
const leaderboardRoutes = require('./routes/leaderboard.routes.js');
const historyRoutes = require('./routes/history.routes.js');

const app = express();
const PORT = process.env.PORT || 4000;

//    Connect to MongoDB first
connectDB()
  .then(() => {
    //  Middleware
    app.use(cors({
      origin: process.env.FRONTEND_URL || "*", 
      credentials: true,
    }));

    app.use(express.json());

    //  Backend API Routes
    app.use('/api/users', userRoutes);
    app.use('/api/leaderboard', leaderboardRoutes);
    app.use('/api/history', historyRoutes);


    //  Start server
    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ DB Connection Error:', err.message);
  });
