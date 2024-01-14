import styled from 'styled-components';
import { MediaAbove } from '../../../styles/mixins';
import { FocusOutlineStyle } from '../../../styles/uis';

export const CarouselLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .image-swiper {
    height: 100%;

    .swiper-wrapper {
      .swiper-slide {
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .swiper-pagination {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;

      ${MediaAbove('md')} {
        bottom: 30px;
      }
    }

    .swiper-pagination-bullet {
      cursor: pointer;
      transition: all 0.2s ease;
      background: transparent;
      border-style: solid;
      border-width: 1px;
      border-color: white;
      opacity: 1;
      width: 8px;
      height: 8px;

      ${MediaAbove('lg')} {
        width: 10px;
        height: 10px;
      }

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
