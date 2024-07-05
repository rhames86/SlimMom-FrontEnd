import styled from 'styled-components';
import { breakpoints } from 'components/styles/breakpoints';

const { tablet, desktop } = breakpoints;
export const Box = styled.div`
  /* padding-top: 72px; */

  @media screen and (min-width: ${tablet}) {
    /* padding-top: 100px; */
  }
  @media screen and (min-width: ${desktop}) {
    /* padding-top: 140px; */
    flex-basis: 60%;
  }
`;
