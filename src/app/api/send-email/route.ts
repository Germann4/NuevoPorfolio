import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Definir el método POST para manejar el envío de correos
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validar que los campos estén completos
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Configurar el transporte de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Variables de entorno de Gmail
        pass: process.env.EMAIL_PASS,
      },
    });

    // Enviar el correo
    await transporter.sendMail({
      from: `"${name}" <${email}>`,  // Remitente
      to: "germandiorio8@gmail.com", // Dirección destino
      subject: "Nuevo mensaje de contacto",
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    });

    // Respuesta exitosa
    return NextResponse.json({
      success: true,
      message: "Correo enviado correctamente",
    });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}