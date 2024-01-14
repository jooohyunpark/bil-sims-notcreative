import React from 'react';
import styled from 'styled-components';
import { AddToCart } from '@amzn/tina-ui';
import { logCount, counters } from '../../../track';
import { ButtonStyleBase, SetFocusOutline } from '../../../styles/uis';

const AddToCartBlock = styled.div`
  button {
    ${ButtonStyleBase};
    width: 100%;
    background: ${({ $color, theme }) => theme.colors[$color] || $color};
    color: ${({ theme }) => theme.colors.white};

    ${SetFocusOutline()};
  }
`;

export default function({ asin = '', color = 'black', onClick = () => {} }) {
  return (
    <AddToCartBlock $color={color}>
      <AddToCart
        asin={asin}
        hideUnavailable={true}
        baseStyles={{}}
        hoverStyles={{}}
        addedStyles={{}}
        onClickAddToCart={() => {
          logCount(counters[`ADD_TO_CART_${asin}`]);
          onClick();
        }}
        onClickShopNow={() => {
          logCount(counters[`SHOP_NOW_${asin}`]);
        }}
      />
    </AddToCartBlock>
  );
}
