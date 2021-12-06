import React from 'react';
import RyazLogo from './RyazLogo';

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
