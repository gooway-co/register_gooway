import React from 'react';
import { Search } from 'lucide-react';
import bannerHeader from '../../assets/images/banner.jpg';

const Hero: React.FC = () => {
  return (
    <div
      className="relative  bg-center text-white"
      style={{ backgroundImage: `url(${bannerHeader})` }}
    >
      {/* Superposición con degradado */}
      <div className="absolute inset-0 bg-gradient-to-r  to-blue-800 opacity-50"></div>

      {/* Contenido */}
      <div className="relative mx-auto px-4 s h-8 py-24" style={{height: "70vh"}}>
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
                className="w-full px-6 py-4 rounded-full text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-green-600 rounded-full hover:bg-green-700 animation-pulseGlow">
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
