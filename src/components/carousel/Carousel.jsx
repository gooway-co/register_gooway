import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselStyle.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Arrow = ({ className, style, onClick, direction }) => {
  return (
    <div className={`arrow ${direction}`} onClick={onClick}>
      {direction === "prev" ? (
        <ArrowBackIosIcon style={{ fontSize: "20px" }} />
      ) : (
        <ArrowForwardIosIcon style={{ fontSize: "20px" }} />
      )}
    </div>
  );
};

const Carousel = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="prev" />, // Flecha izquierda
    nextArrow: <Arrow direction="next" />, // Flecha derecha
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-7xl mx-auto mb-6  lg:pl-8">
        <h2 className="text-3xl font-bold text-green-600 ">Conoce lo mejor de Cartagena</h2>
        <p className="text-gray-600 max-w-2xl">¿Qué tan altas son tus expectativas? ¡Estamos seguros de que aquí las superarás!</p>
      </div>

      <section className="section-carusel">
        <div className="carousel-container">
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.id} className="carousel-item">
                <div
                  className="carousel-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="carousel-title">{item.title}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
   
  );
};

export default Carousel;
