import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config(); // Load .env variables

export const accountEmail = process.env.EMAIL_USER;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export default transporter;
