// require("dotenv").config();
const nodemailer = require("nodemailer");
console.log(process.env);

module.exports = () => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "DevloreCafe@outlook.com",
      pass: process.env.PASSWORD_EMAIL,
    },
  });

  const options = {
    from: "DevloreCafe@outlook.com",
    to: "mount.photos@gmail.com",
    subject: "Email",
    text: "WE didn't do it",
  };

  return transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent" + info.response);
  });
};
