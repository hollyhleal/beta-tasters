const router = require("express").Router();
const { Beta } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const dbBetaData = await Beta.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      // res.status(200).json(dbBetaData);
      res.redirect("/menu-user");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbBetaData = await Beta.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbBetaData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbBetaData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbBetaData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
