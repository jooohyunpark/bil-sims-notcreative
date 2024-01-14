import styled from 'styled-components';
import { MediaAbove, Truncate } from '../../styles/mixins';
import { SimsSans } from '../../styles/types';
import { SetFocusOutline } from '../../styles/uis';

export const ProductCardLayout = styled.div`
  overflow: hidden;
  border-radius: 15px;

  ${MediaAbove('lg')} {
    border-radius: 30px;
  }
`;

export const ProductImageDiv = styled.div`
  background: ${({ theme }) => theme.colors.pine};
  padding: 15px 15px 0 15px;

  ${MediaAbove('lg')} {
    padding: 20px 20px 0 20px;
  }
`;

export const ProductImage = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 200px;

  ${MediaAbove('lg')} {
    height: 300px;
  }
`;

export const ContentDiv = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 15px;

  ${MediaAbove('lg')} {
    padding: 20px;
  }
`;

export const ProductTitleDiv = styled.div`
  margin-bottom: 5px;

  && {
    * {
      ${SimsSans};
    }

    p {
      display: block;
      ${Truncate(2)};
      padding: 0;
    }

    button {
      ${SetFocusOutline()};
    }
  }
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  ${MediaAbove('lg')} {
    margin-bottom: 20px;
  }

  && {
    * {
      ${SimsSans};
      font-weight: 700;
    }
  }
`;

export const ATCDiv = styled.div`
  width: 100%;
`;

export const ShopNowDiv = styled.div`
  margin-top: 20px;
`;
