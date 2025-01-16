import React from 'react';

const TalkToAna: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Imagen o Ilustración de Ana */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src="https://cms-cdn.now.gg/cms-media/2024/05/273-Ana-AI_-2.jpg" alt="Ana, tu IA de turismo" className="w-full h-auto" />
          </div>
          {/* Texto */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Habla con Ana</h2>
            <p className="text-gray-600">
              Conoce a Ana, tu asistente virtual de turismo que te guiará en cada paso de tu viaje. Pregúntale sobre lugares, restaurantes y actividades recomendadas.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Habla con Ana
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkToAna;
