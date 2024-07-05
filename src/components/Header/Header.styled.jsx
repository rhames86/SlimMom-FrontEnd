import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints } from 'components/styles/breakpoints';

const { tablet, desktop, mobile } = breakpoints;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* height: 80px; */
  position: relative;
  @media screen and (min-width: ${desktop}) {
    justify-content: flex-start;
    /* padding-top: 74px; */
  }
`;
export const Nav = styled.div`
  position: absolute;
  top: 59px;
  left: -20px;
  right: 0;
  width: 100vw;
  border-bottom: 2px solid #e0e0e0;
  @media screen and (min-width: ${tablet}) {
    left: -32px;
  }
  @media screen and (min-width: ${desktop}) {
    display: none;
  }
`;

// ---------Logo-------

export const StyledLogo = styled.div`
  display: none;
  /* display: block;
display: flex;
align-items: center;
justify-content: flex-start;
column-gap: 8px; */
  @media screen and (min-width: ${tablet}) {
    display: block;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 10px;
    /* flex-grow: 1; */
  }
  @media screen and (min-width: ${desktop}) {
    column-gap: 0;
    flex-grow: 0;
  }
`;

export const LogoImg = styled.picture`
  /* margin-top: 20px;
  margin-bottom: 16px; */
  max-width: 46px;
  height: 44px;
  @media screen and (min-width: ${desktop}) {
    max-width: 70.25px;
    height: 66px;
    position: absolute;
    top: -37px;
    left: 0px;
  }
  @media screen and (max-width: ${mobile}) {
    margin-right: 8px;
  }
  @media screen and (min-width: ${tablet}) {
    margin-right: 10px;
  }
`;

export const StyledSlimMom = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 5.5px;
  @media screen and (min-width: ${desktop}) {
    margin-left: 59px;
    /* position: absolute;
    top: 126.94px;
    left: 59.51px; */
  }
`;

export const LogoSlim = styled.svg`
  max-width: 47.2px;
  height: 16px;
  fill: ${({ theme }) => theme.colors.firstText};
`;

export const LogoMom = styled.svg`
  max-width: 52.51px;
  margin-bottom: -2px;
  height: 16px;
  fill: ${({ theme }) => theme.colors.button};
`;

export const StyledLogoMob = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;
  /* display: flex;
justify-content: flex-start;
align-items: center;
column-gap: 5.5px; */
  @media screen and (min-width: ${tablet}) {
    display: none;
  }
`;

// export const StyledSlimMomMob = styled.div`
// display: block;
// display: flex;
// align-items: center;
// justify-content: flex-start;
// column-gap: 8px;
// `

export const NavElemnt = styled.div`
  display: none;
  @media screen and (min-width: ${desktop}) {
    display: block;
    width: 0px;
    height: 32px;
    border-right: 2px solid #e0e0e0;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

// ---------Navigation---------

// export const StyledNavigation = styled.div`
//   /* display: flex;
//   column-gap: 14px;
//   @media screen and (min-width: ${tablet}) {
//     column-gap: 24px;
//   } */
// `;
export const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  left: -20px;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backroundBurger};
  z-index: 1;
  @media screen and (min-width: ${tablet}) {
    left: -32px;
  }
  @media screen and (min-width: ${desktop}) {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    margin: 100px auto;
  }
  @media screen and (min-width: ${desktop}) {
    display: none;
  }
`;

export const NavigationItem = styled.li`
  margin-bottom: 20px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondText};
  /* &:hover,
  &:focus {
    color: #ffffff;
  }
  &:active {
    color: #ffffff;
  } */
  @media screen and (min-width: ${desktop}) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;

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
  @media screen and (min-width: ${desktop}) {
    display: none;
  }
`;

export const ButtonClose = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
`;
export const ButtonBurger = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  padding-top: 3px;
  @media screen and (min-width: ${desktop}) {
    display: none;
  }
`;

export const StyledSvgBurger = styled.svg`
  width: 18px;
  height: 12px;
  fill: ${({ theme }) => theme.colors.firstText};
  stroke: ${({ theme }) => theme.colors.firstText};
  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.button};
    stroke: ${({ theme }) => theme.colors.button};
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const StyledSvgClose = styled.svg`
  width: 12px;
  height: 12px;
  fill: ${({ theme }) => theme.colors.firstText};
  stroke: ${({ theme }) => theme.colors.firstText};
  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.button};
    stroke: ${({ theme }) => theme.colors.button};
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: ${desktop}) {
    display: none;
  }
`;

export const StyledUserInfo = styled.div`
  /* position: absolute;
    right: 0;
    button: -120px;
    width: 100vw;
    height: 40px;
    background-color: #EFF1F3; */
`;

export const StyledNavLinkSupport = styled(NavLink)`
  @media screen and (min-width: ${mobile}) {
    display: flex;
  }
  @media screen and (min-width: ${desktop}) {
    display: block;
  }
`;
// @media screen and (min-width: 320px) {}

// @media screen and (min-width: 768px) {}

// @media screen and (min-width: 1200px) {}

export const StyledWrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 45px;
  }
`;
