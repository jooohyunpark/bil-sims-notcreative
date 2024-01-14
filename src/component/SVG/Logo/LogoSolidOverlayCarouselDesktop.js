import React from 'react';
import { useTheme } from 'styled-components';

export default ({ color = '#efefef' }) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="152"
      height="312"
      viewBox="0 0 152 312"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152 0H0V312H152V0ZM76 1L25.9317 104.475L1 156L76 311L151 156L76 1Z"
        fill={theme.colors[color] || color}
      />
    </svg>
  );
};
