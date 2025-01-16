import React from 'react';
import { X } from 'lucide-react';
import DownloadButtons from './DownloadButtons';

const DownloadBanner: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Texto descriptivo */}
          <div className="flex-1">
            <p className="text-sm sm:text-base font-medium">
              Obtenga la experiencia completa con nuestra aplicación móvil
            </p>
          </div>
          {/* Botones de descarga y cierre */}
          <div className="flex items-center space-x-4">
            {/* Componente DownloadButtons */}
            <DownloadButtons className="hidden md:flex items-center space-x-4" />
            {/* Botón de cierre */}
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-blue-700 rounded-full"
              aria-label="Cerrar banner de descarga"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;
