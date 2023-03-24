const nodemailer = require("nodemailer");

module.exports = (email, msg, firstName, lastName) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "devlorecafe@gmail.com",
      pass: process.env.PASSWORD_EMAIL,
    },
  });

  const options = {
    from: email,
    to: "devlorecafe@gmail.com",
    subject: "New Response",
    text: `Message from ${firstName}  ${lastName}!
    They say:  ${msg}
    
    They can be reached at ${email}`,
  };

  return transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Email ${info.response} was successfully sent`);
  });
};
