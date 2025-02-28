"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="mt-2 sm:mr-10 md:mr-20 bg-blue-600 text-white rounded-md px-4 py-2 w-full sm:w-auto"
      >
        <div className="w-8 h-0.5 bg-white mb-1"></div>
        <div className="w-8 h-0.5 bg-white mb-1"></div>
        <div className="w-8 h-0.5 bg-white"></div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-4 w-64 bg-gray-900 rounded-md shadow-lg">
          <ul className="flex flex-col">
            <li
              className="text-white px-4 py-2 hover:bg-gray-800 cursor-pointer"
              onClick={() => handleNavigation("#aboutMe")}
            >
              Acerca de mí
            </li>
            <li
              className="text-white px-4 py-2 hover:bg-gray-800 cursor-pointer"
              onClick={() => handleNavigation("#skills")}
            >
              Habilidades
            </li>
            <li
              className="text-white px-4 py-2 hover:bg-gray-800 cursor-pointer"
              onClick={() => handleNavigation("#projects")}
            >
              Proyectos
            </li>
            <li
              className="text-white px-4 py-2 hover:bg-gray-800 cursor-pointer"
              onClick={() => handleNavigation("#ContactMe")}
            >
              Contáctame
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}