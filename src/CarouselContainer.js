import React from 'react';
import { Carousel } from 'react-bootstrap';
import ImageOne from './img/ImageOne.jpg';
import ImageTwo from './img/ImageTwo.jpg';
import ImageThree from './img/ImageThree.jpg';
import './CarouselContainer.css';

const CarouselContainer = () => {
    return (
      <Carousel pause={false} >
        <Carousel.Item interval={2000} className="image">
          <img
            className="d-block min-vw-100 vh-100"
            src={ImageOne}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000} className="image">
          <img
            className="d-block min-vw-100 vh-100"
            src={ImageTwo}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000} className="image">
          <img
            className="d-block min-vw-100 vh-100"
            src={ImageThree}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
  
  export default CarouselContainer;