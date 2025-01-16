import React from 'react';
import Header from './components/navigation/Header';
import DownloadBanner from './components/navigation/DownloadBanner';
import Hero from './components/home/Hero';
import ExploreCity from './components/home/ExploreCity';
import TalkToAna from './components/home/TalkToAna';
import Categories from './components/home/Categories';
import MapSection from './components/home/MapSection';
import LearnAboutCartagena from './components/home/LearnAboutCartagena';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Hero />
        <ExploreCity />
        <TalkToAna />
        <Categories />
        <MapSection />
        <LearnAboutCartagena />
        {/* Puedes agregar más secciones aquí */}
      </main>
      <DownloadBanner />
      <Footer />
    </div>
  );
};

export default App;
