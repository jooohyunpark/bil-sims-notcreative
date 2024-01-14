import styled from 'styled-components';
import { Row } from 'react-grid-system';
import { FontSize, MediaAbove, SetMaxWidth } from '../../../styles/mixins';
import { SimsSans } from '../../../styles/types';

export const ProductGalleryLayout = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
`;

export const Headline = styled.h2`
  margin-bottom: 40px;

  ${MediaAbove('lg')} {
    margin-bottom: 60px;
  }
`;

export const ProductCardRow = styled(Row)`
  position: relative;
  gap: 20px 0;
  margin-bottom: 40px;

  ${MediaAbove('lg')} {
    gap: 40px 0;
    margin-bottom: 100px;
  }
`;

export const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.55;

  ${MediaAbove('lg')} {
    opacity: 0.75;
  }

  svg {
    ${SetMaxWidth()};
    width: 100%;
    height: auto;
    transform: scale(1.25);
    transform-origin: 50% 10%;

    ${MediaAbove('lg')} {
      transform: scale(1.025);
      transform-origin: 50% 20%;
    }
  }
`;

export const EchoImg = styled.img`
  margin-top: 120px;
  margin-bottom: 10px;
  width: 120%;
  transform: translateX(-10%);
  max-width: unset;

  ${MediaAbove('md')} {
    max-width: 480px;
    width: 100%;
    transform: translateX(0);
  }

  ${MediaAbove('lg')} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const AlexaContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
`;

export const AlexaHeadline = styled.h3`
  margin-bottom: 20px;
`;

export const AlexaDescription = styled.div`
  margin-bottom: 20px;
`;

export const GetTheThemeLink = styled.a`
  display: flex;
  gap: 15px;
  align-items: center;

  &&& {
    ${SimsSans};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.green};

    font-weight: 700;

    ${FontSize(16, 20)};

    ${MediaAbove('lg')} {
      ${FontSize(20, 24)};
    }
  }
`;
