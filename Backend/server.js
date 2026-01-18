import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://portfolio-gamma-rouge-12.vercel.app",
  })
);

// 🔍 Validation helpers
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPhone = (phone) =>
  /^[0-9]{10}$/.test(phone);

// 📩 Route
app.post("/send-mail", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (phone && !isValidPhone(phone)) {
      return res.status(400).json({ success: false, message: "Invalid phone" });
    }

    // ✅ SMTP CONFIG (THIS IS THE KEY FIX)
    const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS,
    },
  });


    // ✅ Verify connection (important)
    await transporter.verify();

    await transporter.sendMail({
    from: `"${name}" <${process.env.BREVO_USER}>`,
    replyTo: email,
    to: process.env.TO_EMAIL,
    subject,
    html: `
      <h2>📬 New Contact Form Submission</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "N/A"}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  });


    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ MAIL ERROR:", err); // 👈 THIS IS IMPORTANT
    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

// ✅ IMPORTANT: dynamic PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
