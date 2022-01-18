import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { ArrowButton } from './ArrowButton.common';

export const CardSlider = ({
  className, data, children, dataKey,
}) => (
  <Swiper
    className={`card-slider ${className}`.trim()}
    slidesPerView="auto"
    spaceBetween={0}
    centeredSlides
    loop
    navigation={{
      prevEl: '.card-slider-nav.prev',
      nextEl: '.card-slider-nav.next',
    }}
  >
    <ArrowButton className="card-slider-nav prev" y="-50%" />
    {data.map((card) => (
      <SwiperSlide key={dataKey ? card[dataKey] : card}>
        {children(card)}
        <div className="slide-overlay" />
      </SwiperSlide>
    ))}
    <ArrowButton className="card-slider-nav next" y="-50%" />
  </Swiper>
);

CardSlider.propTypes = {
  children: PropTypes.func,
  className: PropTypes.string,
  data: PropTypes.instanceOf(Array),
  dataKey: PropTypes.string,
};

CardSlider.defaultProps = {
  children: () => {},
  className: '',
  data: [],
  dataKey: '',
};
