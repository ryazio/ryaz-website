import React from 'react';
import RyazLogo from '../components/RyazLogo';

function BackgroundLogo() {
  return (
    <div className="moving-logo">
      <RyazLogo />
      <RyazLogo />
      <RyazLogo />
    </div>
  );
}

export default BackgroundLogo;
