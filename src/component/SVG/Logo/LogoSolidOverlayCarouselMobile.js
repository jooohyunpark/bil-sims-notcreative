import React from 'react';
import { useTheme } from 'styled-components';

export default ({ color = '#efefef' }) => {
  const theme = useTheme();

  return (
    <svg
      width="367"
      height="408"
      viewBox="0 0 367 408"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M363 165.808L245.516 408H367V0H282.568L363 165.808Z"
        fill={theme.colors[color] || color}
      />
    </svg>
  );
};
