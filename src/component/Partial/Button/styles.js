import styled, { css } from 'styled-components';
import { ButtonStyleBase } from '../../../styles/uis';

const ButtonStyle = css`
  ${ButtonStyleBase};

  &&& {
    background: ${({ theme }) => theme.colors.buttonGray};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;

    @media (hover: hover) {
      &:hover {
        background: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;

export const ButtonLayout = styled.button`
  ${ButtonStyle}
`;

export const LinkLayout = styled.a`
  ${ButtonStyle}
`;
