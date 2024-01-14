import styled from 'styled-components';
import { Row } from 'react-grid-system';
import { FontSize, MediaAbove, Truncate } from '../../../../styles/mixins';
import { FocusOutlineStyle } from '../../../../styles/uis';
import { SimsSans } from '../../../../styles/types';

export const CarouselLayout = styled.div`
  position: relative;
  margin-bottom: 40px;

  ${MediaAbove('lg')} {
    margin-bottom: 80px;
  }

  .product-gallery-featured-swiper {
    .swiper-wrapper {
      .swiper-slide {
        color: ${({ theme }) => theme.colors.black};
        border-radius: 20px;
        box-sizing: border-box;
        overflow: hidden;

        ${MediaAbove('md')} {
          background: ${({ theme }) => theme.colors.white};
          padding: 20px;
        }
      }
    }

    .swiper-pagination {
      bottom: unset;
      position: relative;
      width: unset;
      display: inline-flex;
    }

    .swiper-pagination-bullet {
      cursor: pointer;
      transition: all 0.2s ease;
      background: transparent;
      border-style: solid;
      border-width: 1px;
      border-color: white;
      opacity: 1;
      width: 10px;
      height: 10px;

      &:focus-visible {
        ${FocusOutlineStyle};
      }
    }

    .swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.colors.green};
      border-color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const ASINLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  justify-content: space-between;

  ${MediaAbove('lg')} {
    justify-content: center;
    padding-left: 20px;
  }
`;

export const Eyebrow = styled.div`
  margin-bottom: 5px;
  ${FontSize(14, 18)};
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
`;

export const ProductImage = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
  max-height: 240px;

  ${MediaAbove('md')} {
    max-height: 200px;
  }

  ${MediaAbove('xl')} {
    max-height: 240px;
  }
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  ${MediaAbove('lg')} {
    margin-bottom: 10px;
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
  width: 100%;
  margin-top: 10px;
`;

export const ASINRow = styled(Row)`
  background: ${({ theme }) => theme.colors.white};
  padding: 15px;
  text-align: left;
  height: 100%;

  ${MediaAbove('md')} {
    padding: 0;
  }
`;

export const FeaturedImage = styled.img`
  display: block;
  width: 100%;

  ${MediaAbove('md')} {
    border-radius: 20px;
  }
`;

export const ProductDescription = styled.div`
  ${Truncate()};
  margin-bottom: 10px;
`;

export const Control = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const NavButton = styled.button`
  background: transparent;
  border: none;
  display: none;
  cursor: pointer;

  ${MediaAbove('lg')} {
    display: block;
  }

  svg {
    display: block;
    width: 30px;
    height: auto;
  }
`;
