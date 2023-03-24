const nodemailer = require("nodemailer");

module.exports = (email, msg, firstName, lastName) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "DevloreCafe@outlook.com",
      pass: process.env.PASSWORD_EMAIL,
    },
  });

  const options = {
    from: "DevloreCafe@outlook.com",
    to: email,
    subject: "New Response",
    text: `Message from ${firstName}  ${lastName}!
    They say:  ${msg}`,
  };

  return transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent" + info.response);
  });
};
