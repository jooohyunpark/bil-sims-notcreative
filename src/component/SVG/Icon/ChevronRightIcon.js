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
        d="M11.7443 29.3182C11.0852 28.6592 11.0852 27.5908 11.7443 26.9318L20.676 18L11.7443 9.06824C11.0852 8.40923 11.0852 7.34077 11.7443 6.68176C12.4033 6.02275 13.4717 6.02275 14.1307 6.68176L24.2557 16.8068C24.9148 17.4658 24.9148 18.5342 24.2557 19.1932L14.1307 29.3182C13.4717 29.9773 12.4033 29.9773 11.7443 29.3182Z"
        fill={theme.colors[color] || color}
      />
    </svg>
  );
};
