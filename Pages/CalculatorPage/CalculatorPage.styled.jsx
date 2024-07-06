import styled from 'styled-components';
import { breakpoints } from 'assets/sizes';

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

export const ContainerBar = styled.div`
  @media ${breakpoints.desktop} {
    height: 100%;

    background-color: var(--secondary-background-color);
  }
`;
