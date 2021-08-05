const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Wishlist, Wine } = require("../../db/models");

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
      include: [
        {
          model: Wine,
        },
      ],
    });
    res.json(wishlists);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const wishlistId = req.params.id;
    const cancelledWishlist = await Wishlist.findByPk(wishlistId);
    await cancelledWishlist.destroy();
    return res.json({ message: "wishlist cancelled" });
  })
);

module.exports = router;
