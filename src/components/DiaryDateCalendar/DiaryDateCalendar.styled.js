import styled from 'styled-components';
import { breakpoints } from 'components/styles/breakpoints';
export const Calendarep = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    position: absolute;
    z-index: 1;
    top: 20px;
    width: 320px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    top: 35px;
    left: 265px;
  }
`;

export const buttoncc = styled.a`
  @media (min-width: ${breakpoints.mobile}) {
    margin-left: 20px;
    margin-top: 4px;
    cursor: pointer;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 19px;
  }
  &:hover {
    color: #656cff;
  }
`;

export const viewDate = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    font-family: 'Verdana';
    font-weight: 700;
    font-size: 18px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.firstText};
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 34px;
  }
`;
export const wrapCalendar = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    margin: 0 0 40px 0;
    display: flex;
    position: relative;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0px 0 60px 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobile}) {
    /* padding-top: 81px; */
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: -80px;
    flex-basis: 60%;
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 0px;
  }
`;

export const LeftBlock = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 286px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 610px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 750px;
  }
`;
