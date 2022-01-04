import React from 'react';

const SvgComponent = (props) => (
  <svg
    width={36}
    height={45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.919.921a2 2 0 0 1 2.162 0l15.32 9.843a2 2 0 0 1 .92 1.683v20.071a2 2 0 0 1-.92 1.683l-15.32 9.843a2 2 0 0 1-2.162 0L1.599 34.2a2 2 0 0 1-.92-1.683V12.447a2 2 0 0 1 .92-1.683L16.918.921Z"
      fill="url(#a)"
    />
    <path
      d="M32.339 22.483c0 8.895-6.469 16.012-14.34 16.012-7.87 0-14.338-7.117-14.338-16.012C3.661 13.587 10.13 6.47 18 6.47s14.339 7.118 14.339 16.013Z"
      stroke="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={8.556}
        y1={7.027}
        x2={20.053}
        y2={44.102}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4897F4" />
        <stop offset={1} stopColor="#0B6FE4" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
