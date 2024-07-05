import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints } from 'components/styles/breakpoints';

const { tablet, desktop } = breakpoints;

export const NavigationList = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  /* justify-content: center; */
  @media screen and (max-width: 767px) {
    margin-right: -16px;
  }
  @media screen and (min-width: ${tablet}) {
    gap: 45px;
    /* flex-direction: row-reverse; */
  }
`;

export const NavigationListDiary = styled.div`
  display: none;
  @media screen and (min-width: ${desktop}) {
    display: block;
    list-style: none;
    display: flex;
    column-gap: 24px;
    align-items: center;
    /* flex-grow: 1; */
  }
`;
export const NavigationItem = styled.li`
  /* margin-bottom: 20px; */
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondText};

  @media screen and (min-width: ${tablet}) {
    &:last-child {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
  } /* &:hover,
  &:focus {
    color: #ffffff;
  }
  &:active {
    color: #ffffff;
  } */
`;

export const NavItem = styled(NavLink)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.secondText};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.button};
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    color: ${({ theme }) => theme.colors.button};
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const StyledUserInfo = styled.div`
  @media screen and (min-width: ${desktop}) {
    flex-grow: 1;
  }
`;

export const NavigationLogin = styled.div``;

export const NavigationDiary = styled.div`
  display: flex;
`;

export const StyledDiv = styled.div`
  @media screen and (min-width: ${tablet}) {
    flex-grow: 0;
  }
  @media screen and (min-width: ${desktop}) {
    flex-grow: 1;
  }
`;

export const StyledWrapper = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

// @media screen and (min-width: 320px) {}

// @media screen and (min-width: 768px) {}

// @media screen and (min-width: 1200px) {}
