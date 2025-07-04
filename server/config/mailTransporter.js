const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOtpToEmail = async (email, otp) => {

  const message = `
    Your One-Time Password (OTP) for verifying your account on GoalGear is:

    OTP: ${otp}

    Please do not share this OTP with anyone. This code is valid for the next 10 minutes.

    If you did not request this, please ignore this email.

    Thank you,
    Team GoalGear
  `;

  await transporter.sendMail({
    from: `"GoalGear, OTP Verification" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Yout OTP for GoalGear Verification",
    text: message
  });
}

module.exports = sendOtpToEmail;