import React from 'react';

function SvgComponent(props) {
  return (
    <svg width={50} height={50} viewBox="0 0 50 50" {...props}>
      <g>
        <path
          data-name="Rectangle Copy"
          d="M2.346 22.787L11.133 14l19.201 19.202-10.2 10.2L2.345 25.615a2 2 0 010-2.828z"
          fill="#4651f2"
        />
        <path
          data-name="Rectangle Copy 2"
          d="M38.061 5.619l8.787 8.787a2 2 0 010 2.828L20.36 43.72l-10.2-10.2L38.06 5.619z"
          fill="#3c46da"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
