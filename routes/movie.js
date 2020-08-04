const express = require("express");
const router = express.Router();

const { storeMyMovie, getMyMovie } = require("../controllers/userMovie");
const { protect } = require("../middleware/auth");

router.post("/", protect, storeMyMovie);
router.get("/:userId", protect, getMyMovie);

module.exports = router;
