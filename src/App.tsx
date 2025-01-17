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
import InfoChat from './components/home/InfoChat';
import InfoDownloadApp from './components/home/InfoDownloadApp';
import BannerPartner from './components/bannerPartner/partner';


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
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        
        <div style={{padding: "90px 0px"}}>
          <InfoDownloadApp />
        </div>

        <div>
          <InfoChat/>
        </div>
       

        <div style={{padding: "90px 0px"}}>
          <Carousel items={item} />
        </div>
       
        
        <TalkToAna />
        <BannerPartner />
        {/* Puedes agregar más secciones aquí */}
      </main>
      <DownloadBanner />
      <Footer />
    </div>
  );
};

export default App;
