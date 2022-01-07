import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { motion } from 'framer-motion';
import { ArrowIcon } from '../../icons';

const CardSliderButton = ({ className }) => (
  <motion.div
    className={`card-slider-nav ${className}`}
    initial={{ y: '-50%' }}
    whileTap={{ scale: 0.8 }}
  >
    <ArrowIcon />
  </motion.div>
);

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
    <CardSliderButton className="prev" />
    {data.map((card) => (
      <SwiperSlide key={dataKey ? card[dataKey] : card}>
        {children(card)}
        <div className="slide-overlay" />
      </SwiperSlide>
    ))}
    <CardSliderButton className="next" />
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

CardSliderButton.propTypes = {
  className: PropTypes.string.isRequired,
};
