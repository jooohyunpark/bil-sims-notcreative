import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MediaAbove } from '../../../styles/mixins';

export const HeroLayout = styled.div`
  position: relative;
  overflow: hidden;
  max-height: ${({ $height }) => $height};
`;

export const Clip = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    outline: 10000px solid ${({ theme }) => theme.colors.white};
    outline-offset: -4px;
    width: auto;
    height: 75%;

    ${MediaAbove('lg')} {
      height: 100%;
    }
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
