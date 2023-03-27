const router = require("express").Router();
const { Beta, Rating, Food } = require("../models");

// GET landing page
//http://localhost:3001/
router.get("/", async (req, res) => {
  if (req.session.loggedInUser) {
    return res.redirect("/menu-user");
  } else if (req.session.loggedInManager) {
    return res.redirect("/menu-mgr");
  }
  try {
    res.render("landing", {
      // betatasters,
      loggedInUser: req.session.loggedInUser, //can set to true/false for testing
      loggedInManager: req.session.loggedInManager, //can set to true/false for testing
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET contact page
//http://localhost:3001/contact
router.get("/contact", async (req, res) => {
  try {
    res.render("contact", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET menu-mgr
// Working
//http://localhost:3001/menu-mgr
router.get("/menu-mgr", async (req, res) => {
  if (!req.session.loggedInManager) {
    return res.redirect("/");
  }
  try {
    const foodData = await Food.findAll({});
    const foods = foodData.map((food) => food.get({ plain: true }));
    res.render("menu-mgr", {
      foods,
      loggedInUser: false,
      loggedInManager: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET menu-user
// Working
//http://localhost:3001/menu-user
router.get("/menu-user", async (req, res) => {
  if (!req.session.loggedInUser) {
    return res.redirect("/");
  }
  try {
    const foodData = await Food.findAll({});

    const foods = foodData.map((food) => food.get({ plain: true }));

    res.render("menu-user", {
      foods,
      loggedInUser: true,
      loggedInManager: false,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET review-user
// Working
//http://localhost:3001/review-user
router.get("/review-user", async (req, res) => {
  if (!req.session.loggedInUser) {
    return res.redirect("/");
  }
  try {
    res.render("review-user", {
      loggedInUser: true,
      loggedInManager: false,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET reviews-mgr
//http://localhost:3001/reviews-mgr
// Working
router.get("/reviews-mgr", async (req, res) => {
  if (!req.session.loggedInManager) {
    return res.redirect("/");
  }
  try {
    const ratingData = await Rating.findAll({
      include: [{ model: Beta }],
    });
    const reviews = ratingData.map((rating) => rating.get({ plain: true }));

    res.render("reviews-mgr", {
      reviews,
      loggedInUser: false,
      loggedInManager: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET view review user
// Working - but needs to include id
//http://localhost:3001/view-review-user
router.get("/view-rev-user", async (req, res) => {
  if (!req.session.loggedInUser) {
    return res.redirect("/");
  }
  try {
    const ratingData = await Rating.findAll({
      include: [{ model: Beta }],
    });
    const reviews = ratingData.map((rating) => rating.get({ plain: true }));

    res.render("view-rev-user", {
      reviews,
      loggedInUser: true,
      loggedInManager: false,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET route for error-page
router.get("/error-page", async (req, res) => {
  try {
    res.render("error-page", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
