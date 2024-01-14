import { css } from 'styled-components';
import { breakpoints } from './vars';

export const FontSize = (size = 16, lineHeight = 24) => css`
  font-size: ${size}px;
  line-height: ${lineHeight}px;
`;

export const MediaBelow = key =>
  `@media (max-width: ${breakpoints[key] - 1}px)`;

export const MediaAbove = key => `@media (min-width: ${breakpoints[key]}px)`;

export const MediaAboveInline = key =>
  `@media (minWidth: ${breakpoints[key]}px)`;

export const SlideIn = (duration = 0.3, delay = 0) => css`
  animation-duration: ${duration}s;
  animation-delay: ${delay}s;
  animation-name: slidein;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes slidein {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const FadeIn = (duration = 0.3, delay = 0) => css`
  animation-duration: ${duration}s;
  animation-delay: ${delay}s;
  animation-name: fadein;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const SetMaxWidth = () => css`
  max-width: ${({ theme }) => theme.breakpoints.max}px;
  margin: 0 auto;
`;

export const Truncate = (line = 3) => css`
  max-width: 100%;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;
