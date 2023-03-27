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
      req.session.loggedInUser = true;
      req.session.userId = dbBetaData.id;
      req.session.username = dbBetaData.username;

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
        email: req.body.userEmail,
      },
    });

    if (!dbBetaData) {
      // res
      //   .status(400)
      //   .json({ message: "Incorrect email or password. Please try again!" });
      res.redirect("/error-page");
      return;
    }

    const validPassword = await dbBetaData.checkPassword(req.body.userPassword);

    if (!validPassword) {
      // res
      //   .status(400)
      //   .json({ message: "Incorrect email or password. Please try again!" });
      res.redirect("/error-page");
      return;
    }

    req.session.save(() => {
      req.session.loggedInUser = true;
      res.redirect("/menu-user");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedInUser) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
