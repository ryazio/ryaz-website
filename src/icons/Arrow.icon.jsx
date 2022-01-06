import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.983 5.763 6.306 3.086a.583.583 0 1 0-.823.828l2.683 2.672a.583.583 0 0 1 0 .828l-2.683 2.672a.584.584 0 1 0 .823.828l2.677-2.678a1.75 1.75 0 0 0 0-2.473Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
