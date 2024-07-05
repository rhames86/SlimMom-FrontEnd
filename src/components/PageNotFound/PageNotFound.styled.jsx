import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints.js';

const { mobile, tablet, desktop } = breakpoints;

export const PageNotFd = styled.div`
  text-align: center;
  color: red;
  /* height: 700px; */
  /* padding-top: 200px; */
  font-weight: 700;
  text-shadow: 0 -0.4px 0.4px #ffffff, 0.4px 0.4px 0.4px #00000031;

  @media screen and (min-width: ${desktop}) {
    flex-basis: 60%;
  }
`;

export const StyledHeader = styled.ul`
  display: flex;
  margin-bottom: 8px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.button};
  line-height: 1.4;
  text-shadow: 4px 4px 5px ${({ theme }) => theme.colors.secondText};
  transition: text-shadow 1000ms cubic-bezier(0.4, 0, 0.2, 1),
    text-transform 5000ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: ${mobile}) {
    font-size: 65px;
  }

  @media screen and (min-width: ${mobile}) {
    font-size: 65px;
  }

  @media screen and (min-width: ${tablet}) {
    font-size: 95px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 120px;
  }
`;
export const StyledLine = styled.p`
  color: ${({ theme }) => theme.colors.button};
  line-height: 1.4;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-shadow: 4px 4px 5px ${({ theme }) => theme.colors.secondText};
  transition: text-shadow 1000ms cubic-bezier(0.4, 0, 0.2, 1),
    transform color 2500ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: ${mobile}) {
    font-size: 15px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${mobile}) {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${tablet}) {
    font-size: 45px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 54px;
  }
`;

export const StyledText = styled.span`
  color: ${({ theme }) => theme.colors.button};
  font-size: 14px;

  @media screen and (max-width: ${mobile}) {
    font-size: 10px;
  }

  @media screen and (min-width: ${mobile}) {
    font-size: 10px;
  }

  @media screen and (min-width: ${tablet}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 24px;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
`;
export const StyledImg = styled.img`
  animation: loader 4s;
  && hover {
    rotate: 1.75turn;
    transition: rotate 1s;
  }
  @keyframes loader {
    0% {
      rotate: 0deg;
    }
    100% {
      border-radius: 50%;
      rotate: 360deg;
    }
  }
`;
