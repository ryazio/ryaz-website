import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    width={20}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.49 6.91h7.266L10 0Z"
      fill="#FF800B"
    />
  </svg>
);

export default SvgComponent;
