import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M15.805.196a.667.667 0 0 0-.943 0L8 7.058 1.138.196a.667.667 0 0 0-.942.942L7.058 8 .196 14.862a.667.667 0 0 0 .942.943L8 8.943l6.862 6.862a.667.667 0 0 0 .943-.943L8.943 8l6.862-6.862a.667.667 0 0 0 0-.942Z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgComponent;
