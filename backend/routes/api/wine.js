const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Wine } = require("../../db/models");

// -> find all wines

router.get(
  "",
  asyncHandler(async (req, res) => {
    const wines = await Wine.findAll({});
    res.json(wines);
  })
);

module.exports = router;
