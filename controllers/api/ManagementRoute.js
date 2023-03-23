const router = require('express').Router();
const { Mange } = require('../../models');



router.post('/', async (req, res) => {
  try {
    const dbMangeData = await Mange.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbMangeData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    const dbMangeData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbMangeData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbMangeData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbMangeData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});