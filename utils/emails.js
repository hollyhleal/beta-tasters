const nodemailer = require("nodemailer");

module.exports = (email, msg, firstName, lastName) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    port: 465,
    secure: true,
    auth: {
      user: "DevloreCafe@outlook.com",
      pass: process.env.PASSWORD_EMAIL,
    },
  });

  const options = {
    from: "DevloreCafe@outlook.com",
    to: email,
    subject: "New Response",
    text: `<h1>Message from ${firstName}  ${lastName}!<h2>
    <p> They say:  ${msg} </p
    `,
  };

  return transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent" + info.response);
  });
};
