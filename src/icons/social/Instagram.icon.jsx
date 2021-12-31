import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.165 0A5.84 5.84 0 0 0 .333 5.835v8.333A5.84 5.84 0 0 0 6.168 20h8.333a5.84 5.84 0 0 0 5.832-5.835V5.832A5.84 5.84 0 0 0 14.498 0H6.165Zm10.001 3.333a.834.834 0 1 1 0 1.668.834.834 0 0 1 0-1.668ZM10.333 5c2.758 0 5 2.242 5 5s-2.242 5-5 5c-2.757 0-5-2.242-5-5s2.243-5 5-5Zm0 1.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Z"
      fill="#9F9F9F"
    />
  </svg>
);

export default SvgComponent;
