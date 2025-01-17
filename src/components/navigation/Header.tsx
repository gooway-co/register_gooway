import React from 'react';
import { Menu, X } from 'lucide-react';
import DownloadButtons from './DownloadButtons';
import NavigationLinks from './NavigationLinks';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-green-600 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-white">Gooway</h1>
          </div>

          {/* Navegación de escritorio */}
          <NavigationLinks className="hidden md:flex space-x-8" />

          {/* Contenedor para el texto y los botones de descarga */}
          <div className="hidden md:flex items-center space-x-4">
            <DownloadButtons />
          </div>

          {/* Botón del menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden">
          <NavigationLinks className="px-2 pt-2 pb-3 space-y-1 sm:px-3" isMobile />
          {/* Opcional: Incluir el texto en el menú móvil */}
          <div className="px-4 py-3">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Descargar la app Gooway aquí:
            </span>
            <DownloadButtons isMobile />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
