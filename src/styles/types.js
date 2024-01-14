import { css } from 'styled-components';
import { MediaAbove, FontSize } from './mixins';

export const AmazonEmber = css`
  font-family: 'Amazon Ember', Arial, sans-serif;
`;

export const SimsSans = css`
  font-family: 'Sims Sans', Arial, sans-serif;

  @font-face {
    font-family: 'Sims Sans';
    src: url('https://m.media-amazon.com/images/G/01/BIL/Campaigns/SIMS-2023/The_Sims_Sans.woff2')
        format('woff2'),
      url('https://m.media-amazon.com/images/G/01/BIL/Campaigns/SIMS-2023/The_Sims_Sans.woff')
        format('woff');
    font-display: swap;
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sims Sans';
    src: url('https://m.media-amazon.com/images/G/01/BIL/Campaigns/SIMS-2023/The_Sims_Sans-Bold.woff2')
        format('woff2'),
      url('https://m.media-amazon.com/images/G/01/BIL/Campaigns/SIMS-2023/The_Sims_Sans-Bold.woff')
        format('woff');
    font-display: swap;
    font-weight: 700;
    font-style: normal;
  }
`;

export const h1 = css`
  ${SimsSans};
  font-weight: 700;
  ${FontSize(32, 40)};

  ${MediaAbove('md')} {
    ${FontSize(40, 48)};
  }

  ${MediaAbove('lg')} {
    ${FontSize(48, 56)};
  }
`;

export const h2 = css`
  ${SimsSans};
  font-weight: 700;
  ${FontSize(24, 32)};

  ${MediaAbove('md')} {
    ${FontSize(32, 40)};
  }

  ${MediaAbove('lg')} {
    ${FontSize(40, 48)};
  }
`;

export const h3 = css`
  ${SimsSans}
  font-weight: 700;
  text-transform: uppercase;

  ${FontSize(24, 32)};

  ${MediaAbove('lg')} {
    ${FontSize(32, 40)};
  }
`;

export const body = css`
  ${SimsSans}
  font-weight: 400;
  ${FontSize(16, 24)};

  ${MediaAbove('lg')} {
    ${FontSize(18, 26)};
  }
`;
