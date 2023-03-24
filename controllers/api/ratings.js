const router = require("express").Router();
const { Rating, Food, BetaTaster } = require("../../models");

//post new review
router.post("/", async (req, res) => {
  try {
    const ratingsData = await Rating.create({
      rating: req.body.rating,
      review: req.body.review,
      //user_id: req.session.user_id,
      //food_id: req.session.food_id,
    });
    res.status(200).json(ratingsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
