import styled from 'styled-components';
import { FontSize, MediaAbove } from '../../../styles/mixins';

export const CarouselLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .swiper {
    height: 100%;

    .swiper-wrapper {
      align-items: center;

      .swiper-slide {
        position: relative;
        min-width: 120px;
        width: 43%;
        height: auto;
        cursor: pointer;

        ${MediaAbove('sm')} {
          width: 100%;
        }

        border-width: 2px;
        border-color: transparent;
        border-style: solid;
        box-sizing: border-box;
        transition: all 0.2s ease;

        &.active {
          border-color: ${({ theme }) => theme.colors.green};
        }
      }
    }
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 9;

  ${MediaAbove('md')} {
    aspect-ratio: unset;
  }
`;

export const Text = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 55%,
    rgba(0, 0, 0, 0.95) 90%,
    rgba(0, 0, 0, 0.95) 100%
  );

  ${FontSize(14, 18)};
`;
