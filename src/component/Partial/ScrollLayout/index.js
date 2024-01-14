import React, { forwardRef } from 'react';
import { useFullHeight } from '../FullScreen';

import { ScrollLayout, StickyContainerLayout } from './styles';

export default forwardRef(({ height = '200vh', children = null }, ref) => {
  const { fullHeight } = useFullHeight();

  return (
    <ScrollLayout ref={ref} $height={height}>
      <StickyContainerLayout $height={fullHeight}>
        {children}
      </StickyContainerLayout>
    </ScrollLayout>
  );
});
