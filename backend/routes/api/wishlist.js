const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Wishlist } = require("../../db/models");

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, wineId } = req.body;

    const wishlist = await Wishlist.build({
      wineId,
      userId,
    });

    await wishlist.save();
    return res.json({ wishlist });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const wishlists = await Wishlist.findAll({
      where: {
        userId: id,
      },
    });
    return res.json({ wishlists });
  })
);

module.exports = router;
