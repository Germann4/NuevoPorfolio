"use client";
import { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("¡Correo enviado correctamente!");
        setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
      } else {
        setStatus("Error al enviar el correo.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error al enviar el correo.");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen px-4" id="ContactMe">
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-[400px]">
      <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-6 text-center">Contáctame</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm sm:text-base md:text-lg font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            className="mt-1 block w-full text-sm sm:text-base md:text-lg px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
  
        {/* Correo */}
        <div>
          <label htmlFor="email" className="block text-sm sm:text-base md:text-lg font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo"
            required
            className="mt-1 block w-full text-sm sm:text-base md:text-lg px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
  
        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-sm sm:text-base md:text-lg font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            required
            className="mt-1 block w-full text-sm sm:text-base md:text-lg px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>
  
        {/* Botón Enviar */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full max-w-xs sm:w-auto bg-blue-500 text-white text-sm sm:text-base md:text-lg px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-md hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:outline-none"
          >
            Enviar
          </button>
        </div>
  
        {/* Estado del formulario */}
        {status && <p className="text-center text-sm mt-4">{status}</p>}
      </form>
    </div>
  </section>
  );
}

export default ContactMe;