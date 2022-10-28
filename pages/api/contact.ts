/* eslint-disable */
import nodemailer from "nodemailer"
import { NextApiResponse, NextApiRequest } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { fullName, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      
      from: "do-not-reply@digitalinitiative.com",
      to: "clark_holden@icloud.com",
      subject: `Contact form submission from ${fullName}}`,
      html: `<h2>You have a contact form submission</h2><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
    });
  } catch (error: any) {
    return res.status(500).json({});
  }
  return res.status(200).json({ error: "" });
};
