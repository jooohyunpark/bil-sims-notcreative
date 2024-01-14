import styled from 'styled-components';
import { SetMaxWidth, MediaAbove, FontSize } from '../../styles/mixins';

export const CountdownLayout = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 80px;

  ${MediaAbove('lg')} {
    padding-bottom: 100px;
  }
`;

export const Grid = styled.div`
  position: relative;
  margin-bottom: 40px;

  ${MediaAbove('lg')} {
    margin-bottom: 0;
  }

  svg {
    width: 100%;
    height: auto;
    ${SetMaxWidth()};
    pointer-events: none;
    transform: scale(1.05);
  }
`;

export const PanelLayout = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const PanelNumber = styled.div`
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.1em;
`;

export const PanelLabel = styled.div`
  text-transform: uppercase;

  & {
    ${FontSize(12, 12)};
    ${MediaAbove('md')} {
      ${FontSize(14, 14)};
    }
    ${MediaAbove('lg')} {
      ${FontSize(20, 20)};
    }
    ${MediaAbove('xxl')} {
      ${FontSize(22, 22)};
    }
  }
`;

export const CountdownContent = styled.div`
  ${MediaAbove('lg')} {
    margin-top: -200px;
  }

  ${MediaAbove('xxl')} {
    margin-top: -300px;
  }

  @media (hover: none) and (orientation: landscape) {
    margin-top: 40px !important;
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;

  ${MediaAbove('xl')} {
    height: 100%;
  }
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;

  ${MediaAbove('lg')} {
    text-align: left;
  }
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.7px;
  font-weight: 700;

  ${FontSize(16, 24)};
  margin-bottom: 40px;
  gap: 5px;

  ${MediaAbove('xl')} {
    gap: 10px;
    ${FontSize(22, 26)};
    margin-bottom: 0;
    margin-top: 100px;
  }
`;

export const LogoDiv = styled.div`
  padding-bottom: 0.3em;
  width: 56px;

  ${MediaAbove('xl')} {
    width: 72px;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const EyebrowLayout = styled.div`
  margin: 40px 0;

  @media (hover: none) and (orientation: landscape) {
    position: relative !important;
    margin: 40px 0 !important;
  }

  ${MediaAbove('lg')} {
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    width: 100%;
    margin: 0;
  }

  ${MediaAbove('xl')} {
    top: 12%;
  }

  ${MediaAbove('xxl')} {
    top: 15%;
  }
`;

export const Eyebrow = styled.div`
  font-weight: 700;
  letter-spacing: 0.8px;
  ${FontSize(22, 28)};
  text-transform: uppercase;

  ${MediaAbove('xl')} {
    ${FontSize(28, 32)};
  }
`;
