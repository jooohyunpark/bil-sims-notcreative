import styled from 'styled-components';
import { ButtonStyleBase } from '../../../styles/uis';
import { FontSize, MediaAbove } from '../../../styles/mixins';

export const NotifyMeLayout = styled.div`
  display: inline-flex;
  position: relative;
  height: 100%;
`;

export const Button = styled.button`
  ${ButtonStyleBase};
  text-transform: uppercase;
  min-width: 90px;

  && {
    background: ${({ theme, $subscribed }) =>
      $subscribed ? theme.colors.buttonGray : theme.colors.green};
    color: ${({ theme, $subscribed }) =>
      $subscribed ? theme.colors.white : theme.colors.black};
  }

  @media (hover: hover) {
    &:hover {
      background: ${({ theme, $subscribed }) =>
        $subscribed ? theme.colors.black : theme.colors.white};
    }
  }

  ${MediaAbove('lg')} {
    min-width: 160px;
  }
`;

export const ErrorText = styled.p`
  ${FontSize(12, 16)};
  color: white;
  margin-top: 5px;
`;
