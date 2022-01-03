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
      d="M16.667.833h-15C.746.833 0 1.579 0 2.5v15c0 .92.746 1.666 1.667 1.666h15c.92 0 1.666-.745 1.666-1.666v-15c0-.921-.745-1.667-1.666-1.667Zm-10.872 15H3.337v-7.91h2.458v7.91Zm-1.254-9.04a1.433 1.433 0 1 1 0-2.867 1.433 1.433 0 0 1 0 2.866Zm10.462 9.04h-2.456v-3.847c0-.917-.017-2.097-1.278-2.097-1.279 0-1.476.999-1.476 2.03v3.914H7.337v-7.91h2.358v1.08h.033c.329-.62 1.13-1.277 2.326-1.277 2.49 0 2.95 1.639 2.95 3.769v4.338Z"
      fill="#9F9F9F"
    />
  </svg>
);

export default SvgComponent;
