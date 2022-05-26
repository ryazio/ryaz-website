import React from 'react';

const SvgComponent = (props) => (
  <svg
    width={19}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.668.833h-15C.747.833 0 1.579 0 2.5v15c0 .92.746 1.666 1.667 1.666H10v-7.5h-2.5v-2.5h2.5V7.824c0-2.542 1.238-3.658 3.35-3.658 1.012 0 1.547.075 1.8.11v2.39h-1.44c-.897 0-1.21.474-1.21 1.432v1.068h2.628l-.356 2.5H12.5v7.5h4.167c.92 0 1.666-.745 1.666-1.666v-15c0-.921-.746-1.667-1.666-1.667Z"
    />
  </svg>
);

export default SvgComponent;
