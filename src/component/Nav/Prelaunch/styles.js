import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MediaAbove } from '../../../styles/mixins';
import { Button } from '../../Partial/Button';

const navHeight = 60;

export const Nav = styled(motion.nav)`
  position: fixed;
  z-index: 10;
  bottom: ${({ $bottomNavHeight }) => $bottomNavHeight + 20}px;
  border-radius: 10px;
  overflow: hidden;

  ${MediaAbove('lg')} {
    bottom: ${({ $bottomNavHeight }) => $bottomNavHeight + 30}px;
  }

  transform: translateY(150%);
  pointer-events: none;
  opacity: 0;
  transition: all 0.25s ease-in-out;

  &.show {
    transform: translateY(0%);
    pointer-events: auto;
    opacity: 1;
  }
`;

export const NavLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  backdrop-filter: blur(2px);
  padding: 10px;
  border-radius: 10px;
  height: ${navHeight}px;
  background: #222;

  ${MediaAbove('lg')} {
    background: rgba(44, 44, 44, 0.6);
  }
`;

export const LogoDiv = styled.div`
  width: 64px;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  ${MediaAbove('lg')} {
    width: 80px;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  width: 30px;
  height: 30px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MobileMenuLayout = styled(motion.div)`
  width: 100%;
  background: #222;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 10px 10px ${navHeight + 10}px;

  z-index: -1;
  transform: ${({ $open }) =>
    $open ? `translateY(${navHeight}px)` : `translateY(100%)`};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
`;

export const ShopThePacksButtonMobile = styled(Button)`
  @media (max-width: 331px) {
    display: none;
  }
`;
