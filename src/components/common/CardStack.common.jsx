import React, { useContext, useEffect, useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import PropTypes from 'prop-types';
import { MediaQueryContext } from '../../hooks';
import { ArrowButton } from './ArrowButton.common';

const CARD_OFFSET = 24;
const SCALE_FACTOR = 0.1;
const SCALE_FACTOR_X = 0.03;

export const CardStack = ({
  className, data, children, dataKey, style, forwardRef,
}) => {
  const mediaQuery = useContext(MediaQueryContext);
  const [cards, setCards] = useState(data);
  const [y, setY] = useCycle(0, -70);

  useEffect(() => {
    setCards(data);
  }, [data]);

  const moveToStart = (from) => {
    const numberOfCards = cards.length;
    const cardsClone = cards.slice();
    const addedItem = cardsClone.splice((numberOfCards - 1), 1);
    setCards([...addedItem, ...cardsClone]);
  };

  const moveToEnd = (from) => {
    const cardsClone = cards.slice();
    const removedItem = cardsClone.splice(from, 1);
    setCards([...cardsClone, ...removedItem]);
  };

  const previous = async () => {
    setY();
    setTimeout(() => {
      moveToStart();
      setY();
    }, 100);
  };

  const next = async () => {
    setY();
    setTimeout(() => {
      moveToEnd(0);
      setY();
    }, 100);
  };

  const cardOffset = ({ left: CARD_OFFSET, ...mediaQuery({ tablet: { left: 12 } }) }).left;

  return (
    <div className={`card-stack ${className}`} style={style} ref={forwardRef}>
      <ul className="card-stack-wrapper">
        <div className="card-stack-wrapper-arrow-left-holder">
          <ArrowButton
            className="card-stack-wrapper-arrow-left"
            onClick={previous}
            y="-50%"
          />
        </div>
        <ArrowButton
          className="card-stack-wrapper-arrow"
          onClick={next}
          y="-50%"
        />
        {cards.map((card, index) => {
          const canDrag = index === 0;
          const animateValues = () => {
            const indexValue = index < 3 ? index : 3;
            return ({
              right: indexValue * -cardOffset * 2,
              scaleX: 1 - indexValue * SCALE_FACTOR_X,
              scaleY: 1 - indexValue * SCALE_FACTOR,
              zIndex: data.length - index,
            });
          };
          return (
            <motion.li
              key={dataKey ? card[dataKey] : card}
              className="card-stack-wrapper-card"
              style={{
                backgroundColor: card,
                cursor: canDrag ? 'grab' : 'auto',
              }}
              animate={{
                ...animateValues(),
                ...(index === 0 ? { y } : {}),
              }}
              transition={{ y: { duration: 0.2, type: 'tween' } }}
              drag={canDrag ? 'y' : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={() => moveToEnd(index)}
            >
              {children(card)}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

CardStack.propTypes = {
  children: PropTypes.func,
  className: PropTypes.string,
  data: PropTypes.instanceOf(Array),
  dataKey: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  forwardRef: PropTypes.node,
};

CardStack.defaultProps = {
  children: () => null,
  className: '',
  data: ['#266678', '#cb7c7a', ' #36a18b', '#cda35f', '#747474'],
  dataKey: '',
  style: {},
  forwardRef: null,
};
