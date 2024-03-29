/* https://www.codavilla.com/posts/build-a-react-image-slider-carousel-from-scratch */

import React, { useState } from 'react';
import { BriancoDex_SliderData as SliderData } from '../data/data';
//import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <ArrowLeftOutlined className='left-arrow' onClick={prevSlide} />
      <ArrowRightOutlined className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;


