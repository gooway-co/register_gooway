import React from 'react';
import hablaAna from '../../assets/images/slider-for.webp';
import "./talkToAnaStyle.css";

const TalkToAna: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 px-4 sm:px-6">
      <div className="container-talk-ana mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Imagen o Ilustración de Ana */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img 
              src={hablaAna} 
              alt="Ana, tu IA de turismo" 
              className="w-full h-auto rounded-[32px_32px_0px_0] md:rounded-[32px_0_0_32px]" 
              />
          </div>

          {/* Texto */}
          <div className="md:w-1/2 md:pl-12 px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-4" style={{color: "#16af53"}} >Habla con Ana</h2>
            <p className="text-gray-600">
              Conoce a Ana, tu asistente virtual de turismo que te guiará en cada paso de tu viaje. Pregúntale sobre lugares, restaurantes y actividades recomendadas.
            </p>
            <button className="mt-4 px-6 py-2 text-white rounded-full hover:bg-blue-700 transition"  style={{backgroundColor: "#16af53"}}>
              Habla con Ana
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkToAna;
