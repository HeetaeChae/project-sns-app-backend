const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).send("server error");
  }
});

module.exports = router;
