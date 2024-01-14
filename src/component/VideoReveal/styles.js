import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MediaAbove } from '../../styles/mixins';

export const VideoRevealLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
    outline: 10000px solid ${({ theme }) => theme.colors.cyan};
    outline-offset: -4px;
    width: auto;
    height: 75%;

    ${MediaAbove('lg')} {
      height: 100%;
    }
  }
`;
