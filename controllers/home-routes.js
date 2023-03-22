const router = require('express').Router();
const { User } = require('../models');
// TODO: Import the custom middleware

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: User,
          attributes: ['username, email, password'],
        },
      ],
    });

    const users = userData.map((user) =>
      user.get({ plain: true })
    );

    res.render('homepage', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
