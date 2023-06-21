import React from 'react';

export const FloatingRyazLogo = () => (
  <div className="floating-logo">
    {Object.keys([...new Array(3)]).map((value) => (
      <div key={value} className="floating-wireframe">
        <div className="floating-wireframe-left" />
        <div className="floating-wireframe-right" />
      </div>
    ))}
  </div>
);
