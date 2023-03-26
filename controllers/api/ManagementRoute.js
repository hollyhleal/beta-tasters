const router = require("express").Router();
const { Manage, Food } = require("../../models");

// Manager - Create Account
// route: /api/Managelogin
router.post("/", async (req, res) => {
  try {
    const dbManageData = await Manage.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedInManager = true;
      req.session.userId = dbManageData.id;
      res.redirect("/menu-mgr");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Manager Login

// /api/Managelogin/login
router.post("/login", async (req, res) => {
  try {
    const dbManageData = await Manage.findOne({
      where: {
        email: req.body.mgrEmail,
      },
    });

    if (!dbManageData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbManageData.checkPassword(
      req.body.mgrPassword
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedInManager = true;
      res.redirect("/menu-mgr");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//need to create /logout route for manager
//http://localhost:3001/api/Managelogin/logout
router.post("/logout", (req, res) => {
  if (req.session.loggedInManager) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
