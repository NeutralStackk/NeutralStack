import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3001;
const host = process.env.HOST || "0.0.0.0";
const contactTo = process.env.CONTACT_TO || "adminneutralstack@gmail.com";

app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: SMTP_SECURE !== "false",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

app.post("/api/contact", async (req, res) => {
  const name = clean(req.body.name);
  const email = clean(req.body.email);
  const company = clean(req.body.company);
  const service = clean(req.body.service);
  const message = clean(req.body.message);
  const website = clean(req.body.website);

  if (website) {
    return res.json({ message: "Thanks. We will be in touch shortly." });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please enter your name, email address, and project details." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  if (message.length > 3000) {
    return res.status(400).json({ message: "Please keep your project details under 3000 characters." });
  }

  const transporter = createTransporter();
  if (!transporter) {
    return res.status(503).json({
      message: "Email delivery is not configured yet. Please email adminneutralstack@gmail.com directly.",
    });
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    company: escapeHtml(company || "Not provided"),
    service: escapeHtml(service || "Not selected"),
    message: escapeHtml(message).replaceAll("\n", "<br />"),
  };

  try {
    await transporter.sendMail({
      from: `"NeutralStack Website" <${process.env.SMTP_USER}>`,
      to: contactTo,
      replyTo: email,
      subject: `New NeutralStack inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nService: ${service || "Not selected"}\n\nProject details:\n${message}`,
      html: `
        <h2>New NeutralStack project inquiry</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Company:</strong> ${safe.company}</p>
        <p><strong>Service:</strong> ${safe.service}</p>
        <p><strong>Project details:</strong><br />${safe.message}</p>
      `,
    });

    return res.json({ message: "Message received. NeutralStack will contact you shortly." });
  } catch (error) {
    console.error("Contact email delivery failed:", error.message);
    return res.status(500).json({
      message: "We could not send your message right now. Please email adminneutralstack@gmail.com directly.",
    });
  }
});

app.use(express.static(path.join(__dirname, "dist")));
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, host, () => {
  console.log(`NeutralStack server running on ${host}:${port}`);
});
