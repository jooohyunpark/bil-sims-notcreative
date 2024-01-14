import React from 'react';
import { useTheme } from 'styled-components';

export default ({ color = 'white' }) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.93543 5.27539L8.99793 10.3379L14.0604 5.27539L15.2537 6.46864L8.99793 12.7244L2.74219 6.46863L3.93543 5.27539Z"
        fill={theme.colors[color] || color}
      />
    </svg>
  );
};
