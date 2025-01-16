import React from 'react';
import { X } from 'lucide-react';

const DownloadBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm sm:text-base font-medium">
              Obtenga la experiencia completa con nuestra aplicación móvil
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Botones de descarga como imágenes */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://visitcartagena.com.co/images/apple-download.svg" // Cambia esta ruta por la de tu imagen App Store
                  alt="Descargar en App Store"
                  className="h-8"
                />
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://visitcartagena.com.co/images/android-download.svg" // Cambia esta ruta por la de tu imagen Play Store
                  alt="Descargar en Google Play"
                  className="h-8"
                />
              </a>
            </div>
            {/* Botón de cierre */}
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-blue-700 rounded-full"
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
