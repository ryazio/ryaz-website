import React, { useContext, useEffect, useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import PropTypes from 'prop-types';
import { MediaQueryContext } from '../../hooks';

const CARD_OFFSET = 24;
const SCALE_FACTOR = 0.1;
const SCALE_FACTOR_X = 0.03;

export const CardStack = ({
  className, data, children, dataKey, style,
}) => {
  const mediaQuery = useContext(MediaQueryContext);
  const [cards, setCards] = useState(data);
  const [y, setY] = useCycle(0, -70);

  useEffect(() => {
    setCards(data);
  }, [data]);

  const moveToEnd = (from) => {
    const cardsClone = cards.slice();
    const removedItem = cardsClone.splice(from, 1);
    setCards([...cardsClone, ...removedItem]);
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
    <div className={`card-stack ${className}`} style={style}>
      <ul className="card-stack-wrapper">
        <button
          type="button"
          className="card-stack-wrapper-arrow"
          onClick={next}
        >
          {'>'}
        </button>
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
};

CardStack.defaultProps = {
  children: () => null,
  className: '',
  data: ['#266678', '#cb7c7a', ' #36a18b', '#cda35f', '#747474'],
  dataKey: '',
  style: {},
};
