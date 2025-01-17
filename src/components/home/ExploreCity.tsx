import React from 'react';

interface ExploreCityProps {
  title: string;
  description: string;
}

const ExploreCity: React.FC<ExploreCityProps> = ({ title, description }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-4">{title}</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  );
};

export default ExploreCity;
