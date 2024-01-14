import styled, { css } from 'styled-components';
import { Col } from 'react-grid-system';
import { SetMaxWidth, MediaAbove, FontSize } from '../../styles/mixins';
import { SimsSans } from '../../styles/types';

const OverlayAspectRatio = css`
  aspect-ratio: 367/ 408;

  ${MediaAbove('md')} {
    aspect-ratio: 152 / 312;
  }
`;

export const CreativeCarouselLayout = styled.div`
  position: relative;
  width: 100%;
  ${SetMaxWidth()};
  overflow: hidden;
  background: #efefef;
`;

export const CurrentImageLayout = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-height: 400px;
  ${OverlayAspectRatio};
  margin-bottom: 20px;
  transform: translateX(-10%);

  ${MediaAbove('sm')} {
    max-height: 500px;
  }

  ${MediaAbove('md')} {
    max-height: 650px;
    margin-bottom: 0;
    transform: translateX(0);
  }

  ${MediaAbove('lg')} {
    height: 800px;
    max-height: unset;
  }
`;

export const CurrentLayoutDesktop = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  text-align: left;
`;

export const CurrentLayoutMobile = styled.div`
  text-align: left;
  margin-bottom: 40px;
`;

export const CurrentProfile = styled.div``;

export const CurrentTitle = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: 5px;
  ${FontSize(14, 18)};

  ${MediaAbove('lg')} {
    ${FontSize(24, 28)};
  }
`;

export const CurrentName = styled.div`
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  ${FontSize(26, 26)};
  margin-bottom: 20px;

  ${MediaAbove('lg')} {
    ${FontSize(56, 50)};
    margin-bottom: 0;
  }
`;

export const CurrentDescription = styled.div`
  margin-bottom: 20px;

  ${FontSize(14, 18)};

  ${MediaAbove('lg')} {
    margin-bottom: 40px;
    ${FontSize(18, 24)};
  }

  ${MediaAbove('xxl')} {
    ${FontSize(20, 26)};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: scale(1.01);
  pointer-events: none;

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: auto;
    pointer-events: none;
  }
`;

export const NextLayout = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column-reverse;

  ${MediaAbove('md')} {
    flex-direction: column;
  }

  ${MediaAbove('xxl')} {
    transform: translateX(25%);
  }
`;

export const NextButton = styled.button`
  ${SimsSans};
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;

  ${MediaAbove('md')} {
    position: absolute;
    left: 5%;
    top: 12%;
    z-index: 2;
    max-width: 220px;
  }

  ${MediaAbove('xxl')} {
    max-width: 240px;
  }

  @media (hover: hover) {
    &:hover {
      svg {
        transform: translateX(10px);
      }
    }
  }
`;

export const NextName = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};

  ${FontSize(18, 18)};

  ${MediaAbove('lg')} {
    ${FontSize(32, 30)};
  }
`;

export const NextTitle = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple};
  ${FontSize(14, 18)};
  text-wrap: balance;

  ${MediaAbove('lg')} {
    ${FontSize(20, 26)};
  }

  ${MediaAbove('xl')} {
    ${FontSize(24, 28)};
  }

  svg {
    margin-left: 5px;
    vertical-align: middle;
    transition: all 0.2s ease;
  }
`;

export const NextImageLayout = styled.div`
  position: relative;
  overflow: hidden;
  align-self: flex-end;
  width: 200px;
  max-width: 100%;
  ${OverlayAspectRatio};

  ${MediaAbove('md')} {
    transform: translateX(40%);
  }

  ${MediaAbove('lg')} {
    transform: translateX(50%);
  }

  ${MediaAbove('xxl')} {
    width: 240px;
    transform: translateX(25%);
  }
`;

export const MobileButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NextButtonMobile = styled.button`
  background: #dedede;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: grid;
  place-content: center;
`;

export const ShopPackButton = styled.button`
  background: #dedede;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 8px 8px 6px 8px;
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.colors.black};

  ${FontSize(14, 18)};

  @media (hover: hover) {
    &:hover {
      background: #c2c2c2;
    }
  }

  svg {
    width: 30px;
    height: auto;
  }

  span {
    text-align: left;
    max-width: 120px;

    ${MediaAbove('lg')} {
      max-width: unset;
    }
  }

  ${MediaAbove('lg')} {
    background: transparent;
    max-width: unset;

    @media (hover: hover) {
      &:hover {
        background: transparent;
        color: ${({ theme }) => theme.colors.green};

        path {
          stroke: ${({ theme }) => theme.colors.green};
        }
      }
    }
  }
`;
