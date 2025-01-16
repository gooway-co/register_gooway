import React from 'react';

const LearnAboutCartagena: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <img src="https://cms-cdn.now.gg/cms-media/2024/05/273-Ana-AI_-2.jpg" alt="Cartagena Icon" className="h-12 w-12 mb-4" />
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Descubre Cartagena con Gooway</h2>
          <p className="text-gray-600 mb-6">
            Explora la historia, cultura y bellezas naturales de Cartagena con nuestra guía interactiva.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition">
            Aprende Más
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnAboutCartagena;
