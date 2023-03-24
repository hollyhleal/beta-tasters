const router = require("express").Router();
const { Beta, Rating, Food, Manage } = require("../models");
router.get("/", async (req, res) => {
  try {
    const betatasterData = await Beta.findAll({}).catch((err) => {
      res.json(err);
    });

    const betatasters = betatasterData.map((betatasters) =>
      betatasters.get({ plain: true })
    );

    res.render("landing", {
      betatasters,
      loggedInUser: req.session.loggedInUser, //can set to true/false for testing
      loggedInManager: req.session.loggedInManager, //can set to true/false for testing
    });
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
