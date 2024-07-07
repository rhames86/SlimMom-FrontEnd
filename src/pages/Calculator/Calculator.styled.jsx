import styled from 'styled-components';
import { breakpoints } from 'components/styles/breakpoints';

const { desktop } = breakpoints;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 55%;
  /* padding-top: 81px; */
  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    flex-basis: 60%;
  }
`;
