import { css } from 'styled-components';
import { FontSize, MediaAbove } from './mixins';
import { SimsSans } from './types';

export const FocusOutlineStyle = css`
  outline: 5px auto -webkit-focus-ring-color !important;
`;

export const SetFocusOutline = () => css`
  &:focus-visible {
    ${FocusOutlineStyle};
  }
`;

export const ButtonStyleBase = css`
  display: inline-block;
  text-align: center;
  border-radius: 8px;
  max-width: 100%;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  ${SimsSans}
  ${FontSize(14, 18)};
  font-weight: 400;
  padding: 13px 10px 10px 10px;

  ${MediaAbove('lg')} {
    padding: 13px 20px 10px 20px;
  }
`;
