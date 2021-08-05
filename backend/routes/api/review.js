const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Review } = require("../../db/models");

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { rating, comment, wineId, userId } = req.body;

    const review = await Review.build({
      rating,
      comment,
      wineId,
      userId,
    });

    await review.save();
    return res.json({ review });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const reviews = await Review.findAll({
      where: {
        wineId: id,
      },
    });
    res.json(reviews);
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({});
    res.json(reviews);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const { rating, comment, wineId, userId } = req.body;
    const reviewId = req.params.id;

    const PostedReview = await Review.findByPk(reviewId);
    const updateReview = await PostedReview.update({
      rating,
      comment,
      wineId,
      userId,
    });

    return res.json(updateReview);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const reviewId = req.params.id;
    const cancelledReview = await Review.findByPk(req.params.id);
    await cancelledReview.destroy();
    return res.json();
  })
);

module.exports = router;
