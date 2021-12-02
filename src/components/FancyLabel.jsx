import React from 'react';

function fancyLabel({ colorA, colorB, text }) {
  const style = {
    background: `linear-gradient(90deg, ${colorA} 0%, ${colorB} 100%)`,
  };

  return (
    <div className="ff-brandon-light fancy-label" style={style}>
      {text}
    </div>
  );
}

export default fancyLabel;
