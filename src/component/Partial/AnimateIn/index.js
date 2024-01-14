import React, { useEffect, useRef } from 'react';
import { AnimateInLayout } from './styles';

const AnimateIn = ({
  animationData = [
    {
      name: 'animate-in',
      initial: { opacity: 0, transform: 'translateY(40px)' },
      inView: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  ],
  amount = 0.2,
  once = true,
  staggerDelay = 0.1,
  children,
  ...props
}) => {
  const ref = useRef();

  useEffect(() => {
    const classNames = animationData
      .map(entity => `.${entity.name}`)
      .join(', ');

    [...ref.current.querySelectorAll(classNames)]
      .filter(item => !item.hasAttribute('data-animated-section-no-delay'))
      // sort if order exists
      .sort(
        (a, b) =>
          Number(a.getAttribute(`data-animated-section-order`)) -
          Number(b.getAttribute(`data-animated-section-order`)),
      )
      // add delays for each item
      .forEach((item, i) => {
        item.style.transitionDelay = `${i * staggerDelay}s`;
      });
  }, []);

  return (
    <AnimateInLayout
      ref={ref}
      viewport={{ amount, once }}
      onViewportEnter={e => {
        e.target.classList.remove('no-transition-delay');
        e.target.classList.add('in-view');
      }}
      onViewportLeave={e => {
        e.target.classList.add('no-transition-delay');
        e.target.classList.remove('in-view');
      }}
      $data={animationData}
      {...props}
    >
      {children}
    </AnimateInLayout>
  );
};

export default AnimateIn;
