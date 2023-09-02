var nm = require("nodemailer");
var trans = nm.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "pkalp61@gmail.com",
    pass: "swsmvzjjevfmtcff",
  },
});
var mailoption = {
  from: "pkalp61@gmail.com",
  to: "pkalpextra61@gmail.com,receiver2@gmail.com ",
  subject: "Hello",
  text: "Test mail",
  html: "Testing node mailer, <h1>Effect of h1</h1>",
};
trans.sendMail(mailoption, (err, info) => {
  if (err) {
    console.error(err);
  }
  console.log(info);
});

module.exports = sendEmail;