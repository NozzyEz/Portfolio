import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const ImgSlider = ({images}) => (
  <Carousel
    className="img-slider"
    autoPlay
    infiniteLoop
    showThumbs={false}
    showArrows={false}
    swipeable
  >
    {images.map(image => (
      <div key={image.image}>
        <img src={image.image} alt="" />
        <p className="caption">{image.caption}</p>
      </div>
    ))}
  </Carousel>
);
