import styled, { keyframes } from 'styled-components';
import { MediaAbove, FontSize } from '../../styles/mixins';

const SlideKeyframe1 = keyframes`
    0% {
      transform: translateY(40px);
      opacity: 0;
    }
    5% {
      transform: translateY(0%);
      opacity: 1;
    }
    45% {
      transform: translateY(0%);
      opacity: 1;
    }
    50% {
      transform: translateY(-40px);
      opacity: 0;
    }
    100% {
      transform: translateY(-40px);
      opacity: 0;
    }
`;

const SlideKeyframe2 = keyframes`
    0% {
      transform: translateY(40px);
      opacity: 0;
    }
    50% {
      transform: translateY(40px);
      opacity: 0;
    }
    55%{
      transform: translateY(0%);
      opacity: 1;
    }
    95% {
      transform: translateY(0%);
      opacity: 1;
    }
    100% {
      transform: translateY(-40px);
      opacity: 0;
    }
`;

export const AnimatingTextLayout = styled.div`
  width: 100%;
  padding: 40px 0;

  ${MediaAbove('lg')} {
    padding: 60px 0;
  }
`;

export const WordContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px 20px;

  ${MediaAbove('lg')} {
    gap: 20px 40px;
  }
`;

export const Word = styled.div`
  position: relative;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.navy};
  ${FontSize(64, 64)};

  ${MediaAbove('lg')} {
    ${FontSize(120, 120)};
  }
`;

export const Regular = styled.div`
  opacity: 0;
  animation-name: ${SlideKeyframe1};
  animation-duration: 6s;
  animation-fill-mode: forwards;
  animation-delay: ${({ $index }) => $index * 0.07}s;
  animation-iteration-count: infinite;
`;

export const Simlish = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  opacity: 0;
  animation-name: ${SlideKeyframe2};
  animation-duration: 6s;
  animation-fill-mode: forwards;
  animation-delay: ${({ $index }) => $index * 0.07}s;
  animation-iteration-count: infinite;

  svg {
    width: auto;
    height: 75%;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Blank = styled.div`
  width: 120px;
  height: 0;
`;
