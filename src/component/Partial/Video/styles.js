import styled from 'styled-components';
import { MediaAbove } from '../../../styles/mixins';

export const VideoLayout = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

export const Video = styled.video`
  display: block;
  filter: ${({ $showControl }) => `brightness(${$showControl ? 1 : 0.5})`};
  transition: filter 0.35s ease;
  width: 100%;
`;

export const PlayButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  svg {
    width: 64px;
    height: 64px;
    fill: currentColor;

    ${MediaAbove('lg')} {
      width: 80px;
      height: 80px;
    }
  }
`;
