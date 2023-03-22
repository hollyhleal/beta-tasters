const router = require('express').Router();
const { BetaTaster } = require('../models');
router.get('/', async (req, res) => {
  try {
    const betaTasterata = await BetaTaster.findAll({
      include: [
        {
          model: BetaTaster,
          attributes: ['username, email, password'],
        },
      ],
    });

    const betataster = userData.map((user) =>
      user.get({ plain: true })
    );

    res.render('homepage', {
      BetaTaster,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
