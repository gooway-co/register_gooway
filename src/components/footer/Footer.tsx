import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección de selección de idioma */}
        <div className="flex justify-end mb-4">
          <label htmlFor="language" className="mr-2">Idioma:</label>
          <select id="language" name="language" className="bg-blue-700 text-white px-3 py-1 rounded">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
        
        {/* Enlaces rápidos */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/" className="hover:underline">Inicio</a>
            <a href="/about" className="hover:underline">Sobre Nosotros</a>
            <a href="/contact" className="hover:underline">Contacto</a>
          </div>
          {/* Redes Sociales */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
        
        {/* Derechos de autor */}
        <div className="text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Gooway. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
