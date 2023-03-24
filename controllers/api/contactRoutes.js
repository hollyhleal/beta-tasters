const router = require("express").Router();
const sendEmail = require("../../utils/emails");

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, comments } = req.body;

    sendEmail(email, comments, firstName, lastName);

    res.status(200).json("Sent Email");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
