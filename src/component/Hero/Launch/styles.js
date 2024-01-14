import styled from 'styled-components';
import { SetMaxWidth, MediaAbove } from '../../../styles/mixins';
import { navHeight } from '../../Nav/Launch/styles';

export const HeroLayout = styled.div`
  position: relative;
  overflow: hidden;
  max-height: ${({ $offset }) =>
    `calc(100vh - ${$offset}px - ${navHeight.mobile}px)`};
  /* margin-top: ${-navHeight.mobile}px; */

  ${MediaAbove('lg')} {
    /* margin-top: ${-navHeight.desktop}px; */
    max-height: ${({ $offset }) =>
      `calc(100vh - ${$offset}px - ${navHeight.desktop}px)`};
  }
`;

export const Prompt = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 20px;

  ${MediaAbove('lg')} {
    bottom: 40px;
  }

  @media (max-height: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

export const Logo = styled.div`
  margin-bottom: 10px;

  svg {
    display: block;
    width: 30px;
    height: auto;
  }
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 0 5px black;
`;
