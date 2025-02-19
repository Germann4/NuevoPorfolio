"use client";
import React, { useState } from 'react';

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna el estado
  };
 
  return (
    <div className="relative"> {/* Añadir clase relative para posicionar el menú */}
      <button onClick={toggleMenu}
        className="mt-2 sm:mr-10 md:mr-20 bg-blue-600 text-white rounded-md px-4 py-2 w-full sm:w-auto" // Cambia px-2 a px-4 y py-1 a py-2 para más espacio
      >
        <div className="w-8 h-0.5 bg-white mb-1"></div>
        <div className="w-8 h-0.5 bg-white mb-1"></div>
        <div className="w-8 h-0.5 bg-white"></div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-4 w-64 bg-gray-900 rounded-md shadow-lg"> {/* Aumenta el ancho aquí */}
        <ul className="flex flex-col">
          <li className="text-white px-4 py-2 hover:bg-gray-800 cursor-pointer"><a href='#aboutMe'>Acerca de mí</a></li>
          <li className="text-white px-4 py-2 hover:bg-gray-800 cursor-pointer"><a href='#skills'>Habilidades</a></li>
          <li className="text-white px-4 py-2 hover:bg-gray-800 cursor-pointer"><a href="#projects">Proyectos</a></li>
          <li className="text-white px-4 py-2 hover:bg-gray-800 cursor-pointer"><a href="#ContactMe">Contáctame</a></li>
        </ul>
      </div>
      )}
    </div>
  );
}