import styled from 'styled-components';

export const ScrollLayout = styled.div`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height};
`;

export const StickyContainerLayout = styled.div`
  width: 100%;
  height: ${({ $height }) => $height};
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
