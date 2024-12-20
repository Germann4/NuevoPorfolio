"use client";

function ContactMe() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      alert("Formulario enviado. ¡Gracias por contactarme!");
    };
  
    return (
      <section className="flex justify-center items-center h-[100vh]" id="ContactMe">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
          <h2 className="text-2xl font-bold mb-6 text-center">Contáctame</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              />
            </div>
  
            {/* Correo */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu correo"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              />
            </div>
  
            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
  
            {/* Botón Enviar */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:outline-none"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  
export default ContactMe;