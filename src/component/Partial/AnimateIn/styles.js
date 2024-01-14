import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

function createCSS(data) {
  let styles = '';

  const styleString = style =>
    Object.entries(style)
      .map(([k, v]) => `${k}:${v}`)
      .join(';');

  data.forEach(
    ({
      name,
      initial,
      inView,
      duration = 0.35,
      ease = 'ease-in-out',
      target = '',
    }) => {
      styles += `
    .${name} ${target} {
      ${styleString(initial)};
      transition-property: ${Object.keys(initial).join(', ')};
      transition-duration: ${duration}s;
      transition-timing-function: ${ease};
    }

    &.in-view {
      .${name} ${target} {
        ${styleString(inView)};
      }
    }
  
    &.no-transition-delay {
      .${name} ${target} {
        transition-delay: 0s !important;
      }
    }
  `;
    },
  );

  return css`
    ${styles}
  `;
}

export const AnimateInLayout = styled(motion.div)`
  width: 100%;

  ${({ $data }) => createCSS($data)}
`;
