import React, { useEffect, useState, useCallback } from "react";
import "./carousel.scss";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const items = [
    {
      img: "img/carousel-1.jpg",
      description: "We are professional ",
      title: "For your dream project",
      link: "#",
    },
    {
      img: "img/carousel-2.jpg",
      description: "We build your home",
      title: "Professional Builder",
      link: "#",
    },
    {
      img: "img/carousel-3.jpg",
      description: "We are trusted",
      title: "For your dream home",
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const nextSlide = useCallback(() => {
    if (currentIndex === items.length - 1) {
      setIsTransitionEnabled(false);
      setTimeout(() => {
        setIsTransitionEnabled(true);
        setCurrentIndex(0);
      }, 5000); // Short delay to instantly move to the first slide
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, items.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  return (
    <div
      id="carousel"
      className="my-carousel app-slide"
      data-ride="carousel"
      style={{ marginTop: "0px" }}
    >
      <div className="app-carousel-arrow app-left-arrow" onClick={prevSlide}>
        &#9664;
      </div>
      <div className="app-carousel-inner">
        <div
          className="app-carousel-content"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitionEnabled ? "transform 0.5s ease" : "none",
          }}
        >
          {items.map((item, index) => (
            <div className="app-carousel-item" key={index}>
              <CarouselItem {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className="app-carousel-arrow app-right-arrow" onClick={nextSlide}>
        &#9654;
      </div>
    </div>
  );
};

export default Carousel;
