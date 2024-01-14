import React from 'react';
import styled from 'styled-components';
import { motion, easeInOut } from 'framer-motion';

const FadeInDiv = styled(motion.div)`
  width: 100%;
`;

const FadeIn = ({
  delay = 0,
  once = true,
  amount = 0.25,
  duration = 0.35,
  children = null,
  slide = false,
  ...props
}) => (
  <FadeInDiv
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    transition={{
      duration,
      delay,
      ease: easeInOut,
    }}
    variants={{
      hidden: {
        opacity: 0,
        y: slide ? 40 : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    }}
    {...props}
  >
    {children}
  </FadeInDiv>
);

export default FadeIn;
