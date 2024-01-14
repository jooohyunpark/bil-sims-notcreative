import React from 'react';
import Simlish1 from './1';
import Simlish2 from './2';
import Simlish3 from './3';
import Simlish4 from './4';

export default ({ id = 1 }) => {
  const simlish = {
    1: <Simlish1 />,
    2: <Simlish2 />,
    3: <Simlish3 />,
    4: <Simlish4 />,
  };

  return simlish[id] || simlish[1];
};
