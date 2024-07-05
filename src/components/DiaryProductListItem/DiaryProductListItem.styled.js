import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { breakpoints } from 'components/styles/breakpoints';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

`;

export const Button = styled.button`
  border: 0px;
  background: transparent;
  padding: 0;
`;

export const PName = styled.p`
  padding-bottom: 20px;

  line-height: 120%;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.firstText};

  border-bottom: 1px solid #e0e0e0;

  @media (min-width: ${breakpoints.mobile}) {
    font-weight: 400;
    width: 130px;
    margin-right: 8px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-weight: 700;
    width: 240px;
    margin-right: 22px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin-right: 48px;
  }
`;


export const Close = styled(IoClose)`
  width: 25px;
  height: auto;
  fill: ${({ theme }) => theme.colors.firstText};
  stroke: ${({ theme }) => theme.colors.firstText};
  &:hover,
  &:focus {
    transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.2);

    fill: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const PGrame = styled.p`
  padding-bottom: 20px;
  line-height: 120%;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.firstText};
  text-align: right;
  border-bottom: 1px solid #e0e0e0;

  @media (min-width: ${breakpoints.mobile}) {
    font-weight: 400;
    width: 50px;
    margin-right: 8px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-weight: 700;
    width: 107px;
    margin-right: 46px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin-right: 32px;
  }
`;


export const PKcal = styled.p`
  padding-bottom: 20px;
  font-size: 14px;

  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.firstText};
  text-align: right;
  border-bottom: 1px solid #e0e0e0;

  @media (min-width: ${breakpoints.mobile}) {
    font-weight: 400;
    width: 58px;
    margin-right: 8px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-weight: 700;
    width: 107px;
    margin-right: 32px;
  }
`;


export const Kcal = styled.span`
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 10px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`;