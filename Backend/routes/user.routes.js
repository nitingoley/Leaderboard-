const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  claimPoints,
} = require("../controllers/userController.js");

router.post("/", createUser);
router.get("/", getAllUsers);
router.post("/claim/:userId", claimPoints);

module.exports = router;
