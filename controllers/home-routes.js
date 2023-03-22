const router = require("express").Router();
const { BetaTaster } = require("../models");
router.get("/", async (req, res) => {
  try {
    const betatasterData = await BetaTaster.findAll({});

    const betatasters = betatasterData.map((betatasters) =>
      betatasters.get({ plain: true })
    );

    res.render("homepage", {
      betatasters,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
