import styled from 'styled-components';
import { Row } from 'react-grid-system';
import { SetMaxWidth, MediaAbove, FontSize } from '../../styles/mixins';

export const EpisodesLayout = styled.div`
  position: relative;
  width: 100%;
  padding-top: 40px;
`;

export const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.65;

  ${MediaAbove('lg')} {
    opacity: 0.55;
  }

  svg {
    ${SetMaxWidth()};
    width: 100%;
    height: auto;
    transform: scale(1.25);
    transform-origin: 50% 10%;

    ${MediaAbove('lg')} {
      transform: scale(1.025);
      transform-origin: 50% 20%;
    }
  }
`;

export const HeadlineRow = styled(Row)`
  margin-bottom: 40px;
  gap: 20px 0;
`;

export const NotCreativeTextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 0 5px black;
`;

export const VideoRow = styled(Row)`
  gap: 20px 0;
  margin-bottom: 20px;

  ${MediaAbove('md')} {
    margin-bottom: 40px;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CarouselDiv = styled.div`
  ${MediaAbove('md')} {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const VideoDiv = styled.div`
  width: 100%;
  aspect-ratio: 1280 / 720;
`;

export const Title = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  ${FontSize(16, 22)};
  font-weight: 700;
  text-shadow: 0 0 5px black;

  ${MediaAbove('lg')} {
    ${FontSize(22, 26)};
  }
`;

export const Description = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  ${FontSize(16, 22)};
  text-shadow: 0 0 5px black;

  ${MediaAbove('lg')} {
    ${FontSize(18, 24)};
  }
`;

export const AccordionLayout = styled.div`
  & {
    .MuiAccordion-root {
      background: transparent;
      box-shadow: none;
    }

    .MuiAccordionSummary-root {
      padding-left: 0;
      padding-right: 0;
      justify-content: flex-start;
      gap: 0 5px;
    }

    .MuiAccordionSummary-content {
      flex-grow: unset;
    }

    .MuiAccordionDetails-root {
      padding-left: 0;
      padding-right: 0;
    }

    .MuiAccordionSummary-expandIconWrapper {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
