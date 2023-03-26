const router = require("express").Router();
const { Rating, Food, BetaTaster } = require("../../models");

//post new review
router.post("/", async (req, res) => {
  try {
    const ratingsData = await Rating.create({
      rating: req.body.inlineRadioOptions,
      review: req.body.review,
      user_id: req.session.userId,
      food_id: req.body.menu_item,
    });
    res.redirect("/view-rev-user");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
