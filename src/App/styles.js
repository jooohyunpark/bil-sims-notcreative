import styled from 'styled-components';
import { setConfiguration } from 'react-grid-system';
import {
  breakpoints,
  containerWidths,
  gutterWidth,
  colors,
} from '../styles/vars';
import { h1, h2, h3, body, SimsSans } from '../styles/types';
import { SetFocusOutline } from '../styles/uis';
import getAssetPath from '../util/asset';

// React-grid-system docs
// https://sealninja.github.io/react-grid-system/
setConfiguration({
  breakpoints: [...Object.values(breakpoints)],
  containerWidths: [...Object.values(containerWidths)],
  gutterWidth,
  gridColumns: 12,
  maxScreenClass: 'xxl',
});

export const AppLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  overflow-x: clip;
  cursor: url(${getAssetPath('cursor')}) 14 6, auto;
  background: ${colors.white};

  h1 {
    ${h1}
  }

  h2 {
    ${h2}
  }

  h3 {
    ${h3}
  }

  & {
    ${body}
  }

  a {
    ${SetFocusOutline()};

    &,
    &:link,
    &:active,
    &:visited {
      ${SimsSans};
      text-decoration: none;
      color: inherit;
      outline: none;
    }
  }

  button {
    ${SimsSans};
  }

  sup {
    font-size: 0.5em;
  }

  .line-through {
    text-decoration: line-through;
  }
`;
