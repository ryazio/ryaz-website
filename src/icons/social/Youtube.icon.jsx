import React from 'react';

const SvgComponent = (props) => (
  <svg
    width={22}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.166.833c-3.488 0-8.016.874-8.016.874l-.011.013A3.325 3.325 0 0 0 .333 5V15a3.334 3.334 0 0 0 2.814 3.286l.003.005s4.528.876 8.016.876c3.489 0 8.016-.876 8.016-.876l.002-.001A3.334 3.334 0 0 0 22 15V5a3.334 3.334 0 0 0-2.814-3.288l-.004-.005S14.655.833 11.166.833Zm-2.5 5.332L15.333 10l-6.667 3.834V6.165Z"
    />
  </svg>
);

export default SvgComponent;
