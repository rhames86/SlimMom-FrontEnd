import styled from 'styled-components';
import { breakpoints } from 'components/styles/breakpoints';

const { tablet } = breakpoints;

export const StyledUserInfo = styled.div`
  display: block;
  display: flex;
  column-gap: 16px;
  padding-right: 20px;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: -20px;
  bottom: -56px;
  width: 100vw;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundMobile};
  @media screen and (min-width: ${tablet}) {
    position: static;
    margin-right: 48px;
    width: 100%;
    background-color: transparent;
  }
`;

export const NavUserInfo = styled.div`
  width: 0px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
`;

export const Button = styled.button`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  padding: 0;

  color: ${({ theme }) => theme.colors.secondText};

  border: none;
  background-color: transparent;
  &:hover,
  &:focus {
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${({ theme }) => theme.colors.button};
  }
`;

export const StyledTitle = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  cursor: default;
  color: ${({ theme }) => theme.colors.firstText};
`;

export const ButtonBack = styled.button`
  position: absolute;
  left: 20px;
  border: none;
  background-color: transparent;
  stroke: ${({ theme }) => theme.colors.firstText};
  padding: 0;
  cursor: pointer;
  @media screen and (min-width: ${tablet}) {
    display: none;
  }
`;

export const StyledSvgBack = styled.svg`
  width: 12px;
  height: 7px;
  @media screen and (min-width: ${tablet}) {
    display: none;
  }
`;

// @media screen and (min-width: 320px) {}

// @media screen and (min-width: 768px) {}

// @media screen and (min-width: 1200px) {}
