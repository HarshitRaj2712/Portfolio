import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://portfolio-gamma-rouge-12.vercel.app",
      "http://localhost:5174",
    ],
  })
);

/* =======================
   SEND MAIL (BREVO API)
======================= */
app.post("/send-mail", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: "Portfolio Contact",
            email: process.env.TO_EMAIL,
          },
          to: [{ email: process.env.TO_EMAIL }],
          replyTo: { email, name },
          subject,
          htmlContent: `
            <h2>📬 New Contact Form Submission</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone || "N/A"}</p>
            <p>${message}</p>
          `,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo error:", data);
      return res.status(500).json({
        success: false,
        message: "Email sending failed",
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

/* =======================
   START SERVER
======================= */
const PORT = process.env.PORT || 10000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
