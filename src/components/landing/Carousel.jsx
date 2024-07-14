import React from 'react';

const Carousel = () => {
  const slides = [
    { id: 1, image: 'imagen_slider_1.webp' },
    { id: 2, image: 'imagen_slider_2.webp' },
    { id: 3, image: 'imagen_slider_3.webp' },
    { id: 4, image: 'imagen_slider_4.webp' },
  ];

  // Duplicate slides to create an infinite loop effect
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {duplicatedSlides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
