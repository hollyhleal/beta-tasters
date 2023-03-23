const router = require("express").Router();
const { Beta } = require("../models");
router.get("/", async (req, res) => {
  try {
    const betatasterData = await Beta.findAll().catch((err) => {
      res.json(err);
    });

    const betatasters = betatasterData.map((betatasters) =>
      betatasters.get({ plain: true })
    );

    res.render("login-user", {
      betatasters,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Front-end test route
router.post("/example", async (req, res) => {
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
