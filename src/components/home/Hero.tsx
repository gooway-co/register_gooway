import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Cartagena_de_Indias_homebanner.jpg/1200px-Cartagena_de_Indias_homebanner.jpg')" }}
    >
      {/* Superposición con degradado */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-50"></div>

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Descubre tu Escapada Costera Perfecta
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Explora hermosos destinos, crea recuerdos inolvidables
          </p>
          
          {/* Barra de Búsqueda */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Busca destinos, restaurantes o actividades..."
                className="w-full px-6 py-4 rounded-full text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 rounded-full hover:bg-blue-700 animation-pulseGlow">
                <Search className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
