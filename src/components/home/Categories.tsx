// src/components/home/Categories.tsx

import React from 'react';

interface Category {
  title: string;
  description: string;
  icon: string; // URL o ruta de la imagen/icono
}

const categories: Category[] = [
  {
    title: 'Gastronomía',
    description: 'Descubre los mejores restaurantes y delicias locales.',
    icon: '/src/assets/gastronomia-icon.svg',
  },
  {
    title: 'Turismo',
    description: 'Explora atracciones y puntos de interés en tu ciudad.',
    icon: '/src/assets/turismo-icon.svg',
  },
  {
    title: 'Hoteles',
    description: 'Encuentra alojamiento perfecto para tu estancia.',
    icon: '/src/assets/hoteles-icon.svg',
  },
  {
    title: 'Restaurantes',
    description: 'Conoce los restaurantes más populares y reservados.',
    icon: '/src/assets/restaurantes-icon.svg',
  },
];

const Categories: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.title} className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <img src={category.icon} alt={`${category.title} icon`} className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
