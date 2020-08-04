const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const { loginWithGoogle, getMe } = require("../controllers/auth");

router.post("/", loginWithGoogle);
router.get("/me", protect, getMe);

module.exports = router;
