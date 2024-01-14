import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { FontSize, MediaAbove } from '../../../styles/mixins';
import { ButtonStyleBase } from '../../../styles/uis';

export const navHeight = {
  mobile: 50,
  desktop: 70,
};

export const NavLayout = styled(motion.nav)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkGray};
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: ${navHeight.mobile}px;

  ${MediaAbove('lg')} {
    height: ${navHeight.desktop}px;
  }
`;

export const Logo = styled.div`
  height: 36px;

  ${MediaAbove('lg')} {
    height: 48px;
  }

  svg {
    height: 100%;
    width: auto;
  }
`;

const ButtonStyle = css`
  background: transparent;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  ${FontSize(14, 18)};

  ${MediaAbove('xl')} {
    ${FontSize(16, 18)};
  }
`;

export const Button = styled.button`
  ${ButtonStyle};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.green : theme.colors.white};
  transition: all 0.2s ease;
`;

export const Link = styled.a`
  &&& {
    ${ButtonStyle};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  ${MediaAbove('lg')} {
    gap: 30px;
  }
`;

export const PlayLink = styled(motion.a)`
  ${ButtonStyleBase};
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 700;

  &&& {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.black};
    padding: 10px 8px 8px;
    ${FontSize(13, 18)};

    ${MediaAbove('lg')} {
      padding: 10px;
      ${FontSize(14, 18)};
    }
  }

  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const MobileMenuLayout = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: ${({ $height }) => $height};
  background: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.white};
  transform: ${({ $open }) => ($open ? `translateY(0)` : `translateY(-100%)`)};
  transition: all 0.35s ease-out;
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};

  padding-top: ${navHeight.mobile}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: -1;
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-transform: uppercase;
  align-items: center;
  padding: 20px;
  overflow-y: auto;
`;

const MobileMenuStyle = css`
  ${FontSize(20, 24)};
  font-weight: 700;
  background: transparent;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
`;

export const MobileMenuButton = styled(motion.button)`
  ${MobileMenuStyle};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.green : theme.colors.white};
`;

export const MobileMenuLink = styled(motion.a)`
  ${MobileMenuStyle};
  color: ${({ theme }) => theme.colors.white};
`;

export const CloseMenuButton = styled(motion.button)`
  ${FontSize(16, 20)};
  font-weight: 400;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 40px;
  gap: 5px;
  cursor: pointer;

  svg {
    margin-top: -5px;
  }
`;
