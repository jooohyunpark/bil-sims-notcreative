import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MediaAbove } from '../../styles/mixins';

export const StickerLayout = styled(motion.div)`
  z-index: 1;
  pointer-events: none;
`;

export const Sticker = styled(motion.img)`
  width: 70px;
  height: 70px;
  object-fit: contain;

  ${MediaAbove('md')} {
    width: 80px;
    height: 80px;
  }

  ${MediaAbove('lg')} {
    width: 100px;
    height: 100px;
  }

  ${MediaAbove('xl')} {
    width: 120px;
    height: 120px;
  }
`;
