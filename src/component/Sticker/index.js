import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import getAssetPath from '../../util/asset';
import { getRandomInt } from '../../util';
import { StickerLayout, Sticker } from './styles';

export default ({ id = 1, style = {}, ...props }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', ['end', 'start']],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.8, 1, 1, 0.8],
  );

  return (
    <StickerLayout
      ref={ref}
      initial={{ scale: 0 }}
      whileInView={{
        scale: 1,
        transition: { delay: 0.25, ease: 'easeOut' },
      }}
      transition={{ duration: 0.2 }}
      style={{
        ...style,
      }}
    >
      <Sticker
        src={getAssetPath(`sticker_${id}`)}
        initial={{ rotate: getRandomInt(-30, 30) }}
        animate={{
          rotate: getRandomInt(-30, 30),
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1 + 3 * Math.random(),
          repeatDelay: 1 + 2 * Math.random(),
          ease: 'easeInOut',
        }}
        style={{ scale }}
        alt="" // https://www.w3.org/WAI/tutorials/images/decorative/#example-4-image-used-for-ambiance-eye-candy
      />
    </StickerLayout>
  );
};
