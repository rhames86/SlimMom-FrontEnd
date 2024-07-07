import styled from 'styled-components';
import { breakpoints } from 'components/styles/breakpoints';

export const List = styled.ul`
  overflow-y: auto;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 0;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }

  @media (min-width: ${breakpoints.mobile}) {
    max-height: 250px;
    height: 100%;
  }
  @media (min-width: ${breakpoints.tablet}) {
    height: 250px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    height: 280px;
  }
`;


export const DivStyle = styled.div`
  overflow: hidden;
  position: relative;

  /* &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent);
    pointer-events: none;
  } */

  @media (min-width: ${breakpoints.mobile}) {
    width: 286px;
    max-height: 250px;
    height: 100%
  }
  @media (min-width: ${breakpoints.tablet}) {
    height: 250px;
    width: 610px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    height: 280px;
    width: 624px;
  }
`;