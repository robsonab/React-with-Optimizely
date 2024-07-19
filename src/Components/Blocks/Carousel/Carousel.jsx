import React, { useEffect, useState, useCallback, useRef } from "react";
import "./carousel.scss";
import CarouselItem from "./CarouselItem";
import { fetchData } from "../../Utils/api";

const Carousel = ({ carouselId }) => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    if (!carouselId) return;

    const fetchCarousel = async () => {
      setIsLoading(true);
      try {
        const response = await fetchData("/Carousel/" + carouselId);
        setSlides(transformSlidesData(response));
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarousel();
    hasFetched.current = true;
  });

  const transformSlidesData = (data) => {
    return data.slides.map((item) => {
      const slides = {
        img: item.image,
        subTitle: item.subTitle,
        title: item.title,
        link: item.link,
      };
      return slides;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = useCallback(() => {
    if (currentIndex === slides.length - 1) {
      setIsTransitionEnabled(false);
      setTimeout(() => {
        setIsTransitionEnabled(true);
        setCurrentIndex(0);
      }, 5000);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  return (
    <>
      {isLoading && <div className="waiting">Loading...</div>}

      {carouselId && (
        <div
          id="carousel"
          className="my-carousel app-slide"
          data-ride="carousel"
          style={{ marginTop: "0px" }}
        >
          <div
            className="app-carousel-arrow app-left-arrow"
            onClick={prevSlide}
          >
            &#9664;
          </div>
          <div className="app-carousel-inner">
            <div
              className="app-carousel-content"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isTransitionEnabled
                  ? "transform 0.5s ease"
                  : "none",
              }}
            >
              {slides.map((slide, index) => (
                <div className="app-carousel-item" key={index}>
                  <CarouselItem {...slide} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="app-carousel-arrow app-right-arrow"
            onClick={nextSlide}
          >
            &#9654;
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
