const router = require("express").Router();
const sendEmail = require("../../utils/emails");

router.get("/", async (req, res) => {
  try {
    res.render("contact", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post