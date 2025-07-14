const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => console.log(`DB connected`))
    .catch((er) => console.log(`DB not connect ${er}`));
};

module.exports = connectDB;
