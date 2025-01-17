import React from 'react';
import Header from './components/navigation/Header';
import DownloadBanner from './components/navigation/DownloadBanner';
import Hero from './components/home/Hero';
import ExploreCity from './components/home/ExploreCity';
import TalkToAna from './components/home/TalkToAna';
import Carousel from './components/carousel/Carousel';
import MapSection from './components/home/MapSection';
import LearnAboutCartagena from './components/home/LearnAboutCartagena';
import Footer from './components/footer/Footer';

const App: React.FC = () => {

  const item = [
    {
      id: "1",
      title: "Playa Hollywood Cartagena",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/bc/9e/b5/hollywood-north-beach.jpg?"
    },
    {
      id: "2",
      title: "Barrio Getsemaní",
      image: "https://denomades-blog.imgix.net/blog/wp-content/uploads/2020/05/11134136/Restaurante-Palenqueras-en-Plaza-de-la-Trinidad-de-Getsemani%CC%81-en-Cartagena-1.jpg"
    },
    {
      id: "3",
      title: "Reloj Publico",
      image: "https://denomades-blog.imgix.net/blog/wp-content/uploads/2020/05/11141948/ca-times.brightspotcdn.com_.jpg"
    },
    {
      id: "4",
      title: "Calles de la ciudad amurallada",
      image: "https://denomades-blog.imgix.net/blog/wp-content/uploads/2020/05/11130136/cartagena-colombia-copy.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Hero />
        <ExploreCity title='Conversa con Ana, tu guía turística virtual' description='Descubre destinos, planifica tus viajes y obtén recomendaciones únicas con Ana, tu experta en turismo. ¡Haz de cada aventura algo especial!' />
        <TalkToAna />
        <Carousel items={item} />
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
