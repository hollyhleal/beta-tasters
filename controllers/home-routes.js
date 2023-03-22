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

    res.render("landing", {
      betatasters,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
