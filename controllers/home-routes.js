const router = require("express").Router();
const { Beta, Rating, Food, Manage } = require("../models");
const sendEmail = require("../utils/emails");

// GET landing page
router.get("/", async (req, res) => {
  try {
    // const betatasterData = await Beta.findAll({}).catch((err) => {
    //   res.json(err);
    // });

    // const betatasters = betatasterData.map((betatasters) =>
    //   betatasters.get({ plain: true })
    // );

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

// GET all food items page
// Not working - Not needed
//http://localhost:3001/menu-items
// router.get("/menu-items", async (req, res) => {
//   try {
//     const foodData = await Food.findAll({
//       include: [{ model: Food }],
//     });

//     const foods = foodData.map((food) => food.get({ plain: true }));

//     res.render("menu-items", { foods });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// GET food item by id page
// Not working - Not needed
//http://localhost:3001/menu-item/:id
router.get("/menu-item/:id", async (req, res) => {
  try {
    const foodId = await Food.findByPk(req.params.id);
    if (!foodId) {
      res.status(400).json({ message: "No food item found with that id." });
      return;
    }
    res.render("menu-item", { foodId });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET menu-mgr
// Working
//http://localhost:3001/menu-mgr
router.get("/menu-mgr", async (req, res) => {
  try {
    res.render("menu-mgr", {
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
  try {
    const foodData = await Food.findAll({
      // include: [{ model: Food }],
    });

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
  try {
    res.render("review-user", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET reviews-mgr
//http://localhost:3001/reviews-mgr
// Working
router.get("/reviews-mgr", async (req, res) => {
  try {
    res.render("reviews-mgr", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET view review user
// Working - but needs to include id
//http://localhost:3001/view-review-user
router.get("/view-rev-user", async (req, res) => {
  try {
    res.render("view-rev-user", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Front-end test route
router.post("/loggedIn", async (req, res) => {
  try {
    console.log("=====");
    console.log(req.body);
    console.log("=====");
    // res.status(200).send("Example submitted!");
    // res.render("landing");
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
