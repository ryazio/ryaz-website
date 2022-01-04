import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

export const CardSlider = ({
  className, data, children, dataKey,
}) => (
  <Swiper
    className={`card-slider ${className}`.trim()}
    slidesPerView="auto"
    spaceBetween={0}
    centeredSlides
    navigation
    loop
  >
    {data.map((card) => (
      <SwiperSlide key={dataKey ? card[dataKey] : card}>
        {children(card)}
        <div className="slide-overlay" />
      </SwiperSlide>
    ))}
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
