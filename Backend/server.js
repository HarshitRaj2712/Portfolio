import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* =======================
   MIDDLEWARE
======================= */
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://portfolio-gamma-rouge-12.vercel.app",
      "http://localhost:5174",
    ],
    methods: ["POST", "GET"],
  })
);

/* =======================
   VALIDATION HELPERS
======================= */
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPhone = (phone) =>
  /^[0-9]{10}$/.test(phone);

/* =======================
   SMTP TRANSPORT (BREVO)
======================= */
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
});

/* =======================
   HEALTH CHECK
======================= */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend running 🚀",
  });
});

/* =======================
   SEND MAIL ROUTE
======================= */
app.post("/send-mail", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    /* 🔍 REQUIRED FIELDS */
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    /* 📧 EMAIL VALIDATION */
    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    /* 📱 PHONE VALIDATION (OPTIONAL) */
    if (phone && !isValidPhone(phone)) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be 10 digits",
      });
    }

    /* ✉️ SEND EMAIL */
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.TO_EMAIL}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject,
      html: `
        <h2>📬 New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    /* ✅ SUCCESS */
    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("❌ SMTP ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

/* =======================
   START SERVER
======================= */
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
