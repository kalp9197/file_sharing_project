const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'pkalp61@gmail.com',
    pass: 'swsmvzjjevfmtcff'
  },
});

function sendEmail(formData) {
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'pkalp61@gmail.com',
    subject: 'Feedback Form Submission',
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nQuery: ${formData.query}\nRating: ${formData.rating}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = sendEmail;
