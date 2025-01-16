import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-4">Conoce Más la Ciudad</h2>
        <p className="text-center text-gray-600 mb-8">
          Explora los mejores lugares con nuestro mapa interactivo.
        </p>
        <div className="flex justify-center">
          {/* Integración de Google Maps */}
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!..." // Reemplaza con la URL de tu mapa personalizado
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
