export const INITIAL = 'initial';
export const ANIMATE = 'animate';

export const variants = () => {
  const reverse = Math.random() > 0.5;

  return {
    [`${INITIAL}`]: {
      pathLength: reverse ? 1 : 0,
      pathOffset: reverse ? 1 : 0,
    },
    [`${ANIMATE}`]: {
      pathLength: 1,
      pathOffset: 0,
      transition: {
        delay: 0.4 * Math.random(),
        duration: 0.4 + Math.random(),
        ease: 'easeInOut',
      },
    },
  };
};
