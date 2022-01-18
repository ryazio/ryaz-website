import React from 'react';

const SvgComponent = (props) => (
  <svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.25 8.333H2.083A2.086 2.086 0 0 1 0 6.25V2.083A2.086 2.086 0 0 1 2.083 0H6.25a2.086 2.086 0 0 1 2.083 2.083V6.25A2.086 2.086 0 0 1 6.25 8.333ZM2.083.833a1.25 1.25 0 0 0-1.25 1.25V6.25a1.25 1.25 0 0 0 1.25 1.25H6.25A1.25 1.25 0 0 0 7.5 6.25V2.083A1.25 1.25 0 0 0 6.25.833H2.083ZM10 7.917V2.5a.417.417 0 1 0-.833 0v5.417a1.25 1.25 0 0 1-1.25 1.25H2.5a.417.417 0 1 0 0 .833h5.417A2.086 2.086 0 0 0 10 7.917Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
