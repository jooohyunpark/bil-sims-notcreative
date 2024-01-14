import React from 'react';
import { useTheme } from 'styled-components';

export default ({ color = 'white' }) => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.2557 6.68176C24.9148 7.34077 24.9148 8.40923 24.2557 9.06824L15.324 18L24.2557 26.9318C24.9148 27.5908 24.9148 28.6592 24.2557 29.3182C23.5967 29.9773 22.5283 29.9773 21.8693 29.3182L11.7443 19.1932C11.0852 18.5342 11.0852 17.4658 11.7443 16.8068L21.8693 6.68176C22.5283 6.02275 23.5967 6.02275 24.2557 6.68176Z"
        fill={theme.colors[color] || color}
      />
    </svg>
  );
};
