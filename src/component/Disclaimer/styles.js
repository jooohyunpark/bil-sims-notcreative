import styled from 'styled-components';
import { FontSize, MediaAbove } from '../../styles/mixins';

export const DisclaimerLayout = styled.div`
  text-align: left;
  ${FontSize(12, 16)};

  ${MediaAbove('lg')} {
    ${FontSize(14, 18)};
  }
`;
