import React from "react";

const CarouselItem = ({ img, description, title, link }) => {
  return (
    <>
      <img src={img} alt="app-Carousel" />
      <div className="app-carousel-caption">
        <p className="app-animated app-fadeInRight">{description}</p>
        <h1 className="app-animated app-fadeInLeft">{title}</h1>
        <a className="app-btn app-animated app-fadeInUp" href={link}>
          Get A Quote
        </a>
      </div>
    </>
  );
};

export default CarouselItem;
