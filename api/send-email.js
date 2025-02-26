require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configurar el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Deshabilita la verificación del certificado
  },
});

// Ruta para enviar correos
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Todos los campos son requeridos" });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "germandiorio8@gmail.com",
      subject: "Nuevo mensaje de contacto",
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    });

    res.json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ success: false, error: "Error al enviar el correo" });
  }
});

// Exportar `app` para que Vercel lo use
module.exports = app;