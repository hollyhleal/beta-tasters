const router = require("express").Router();
const sendEmail = require("../../utils/emails");

//localhost:3001/api/contact
router.get("/", async (req, res) => {
  try {
    res.render("contact", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;