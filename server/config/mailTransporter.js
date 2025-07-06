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
  //custom mail for the users
  const mailOptions = {
    from: `"GoalGear, OTP Verification" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Your OTP Code - Action Required',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 10px; background: #f9f9f9;">
        <h2 style="text-align: center; color: #4CAF50;">🔐 One-Time Password (OTP)</h2>
        <p style="font-size: 16px;">Hi there,</p>
        <p style="font-size: 16px;">Your One-Time Password (OTP) is:</p>
        <div style="text-align: center; font-size: 24px; font-weight: bold; background: #4CAF50; color: white; padding: 10px 20px; margin: 20px auto; width: fit-content; border-radius: 5px;">
          ${otp}
        </div>
        <p style="font-size: 14px; color: #555;">This OTP is valid for the next <strong>10 minutes</strong>. Do not share it with anyone.</p>
        <p style="font-size: 14px;">If you did not request this, please ignore this email.</p>
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #888; text-align: center;">&copy; ${new Date().getFullYear()} GoalGear. All rights reserved.</p>
      </div>
    `,
  }

  try{
    await transporter.sendMail(mailOptions);
  }catch(err){
    console.log(err.message);
  }
}

module.exports = sendOtpToEmail;