const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "DevloreCafe@outlook.com",
    pass: "Colorado2018!",
  },
});

const options = {
  from: "DevloreCafe@outlook.com",
  to: "mount.photos@gmail.com",
  subject: "Sending Test Email",
  text: "WOWOWOWOWOWOWOW",
};

transporter.sendMail(options, (err, info) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Sent" + info.response);
});


