import React from 'react';
import AppStoreSVG from '../../assets/app-store.svg'; // Asegúrate de tener estas imágenes en src/assets/
import PlayStoreSVG from '../../assets/play-store.svg';

interface DownloadButtonsProps {
  className?: string;
  isMobile?: boolean;
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ className = '', isMobile = false }) => {
  return (
    <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'space-x-4'} ${className}`}>
      {/* Botón de App Store */}
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Descargar en App Store"
        className="transform transition-transform duration-300 hover:scale-105"
      >
        <img
          //src={AppStoreSVG}
          src="https://visitcartagena.com.co/images/apple-download.svg"
          alt="Descargar en App Store"
          className={`h-12 w-auto ${isMobile ? 'mx-auto' : ''} animation-pulseGlow`}
        />
      </a>
      {/* Botón de Google Play */}
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Descargar en Google Play"
        className="transform transition-transform duration-300 hover:scale-105"
      >
        <img
          //src={PlayStoreSVG}
          src="https://visitcartagena.com.co/images/android-download.svg"
          alt="Descargar en Google Play"
          className={`h-12 w-auto ${isMobile ? 'mx-auto' : ''} animation-pulseGlow`}
        />
      </a>
    </div>
  );
};

export default DownloadButtons;
