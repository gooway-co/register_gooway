import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageToggle = (): void => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={handleLanguageToggle}
      className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 focus:outline-none"
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'es' ? 'ES' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
