import React from 'react';
import styled from 'styled-components';

import { Content } from '../../../content/config';
import { logCount, counters } from '../../../track';
import { ButtonStyleBase, SetFocusOutline } from '../../../styles/uis';

const Link = styled.a`
  &&& {
    ${ButtonStyleBase};
    width: 100%;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    ${SetFocusOutline()};
  }
`;

export default function({ asin = '', onClick = () => {} }) {
  return (
    <Link
      asin={asin}
      href={`https://www.amazon.com/dp/${asin}`}
      onClick={() => {
        logCount(counters[`SHOP_NOW_${asin}`]);
        onClick();
      }}
      target="_blank"
    >
      <Content id="shopNowText" />
    </Link>
  );
}
