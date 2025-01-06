// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer'
import cors from 'cors'
import Contact from './schema/userdets.js'; 
// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors())
app.use(express.json());
// MongoDB connection using Mongoose
mongoose.connect("mongodb://localhost:27017/Clients")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
// Sample route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.post('/send-email', async (req, res) => {
  const { name,email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).send('All fields are required.');
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      port: 465,
      user: "akifbutt935@gmail.com", 
      pass: "mquq zczn tvix mbje"  
    }
  });

  const mailOptions = {
    from: email, // The sender's email (the user's email)
    to: "akifbutt935@gmail.com", // Your email address
    subject: `Contact Form: ${subject}`, 
    text: `From: ${email}\n\n${message}` 
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
     // Save the contact data to MongoDB
     const user = new Contact({ name, email, subject, message });
     await user.save();
    res.status(200).send('Your message has been sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email: ' + error.message);
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
