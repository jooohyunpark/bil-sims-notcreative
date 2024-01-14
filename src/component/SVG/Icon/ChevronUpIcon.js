import React from 'react';
import { useTheme } from 'styled-components';

export default ({ color = 'white' }) => {
  const theme = useTheme();

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0646 12.7246L9.00207 7.66211L3.93957 12.7246L2.74633 11.5314L9.00207 5.27562L15.2578 11.5314L14.0646 12.7246Z"
        fill={theme.colors[color] || color}
      />
    </svg>
  );
};
