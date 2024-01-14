import styled from 'styled-components';
import { MediaAbove } from '../../../styles/mixins';

export const CarouselLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .swiper {
    height: 100%;

    .swiper-wrapper {
      align-items: center;

      .swiper-slide {
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
