import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';

import {
  StyledHeaderAuth,
  StyledFormAuth,
  StyledLabelAuth,
  StyledWrapInputAuth,
  StyledInputAuth,
  StyledBtnAuthAccent,
  StyledErrorAuth,
} from '../../pages/Login/Login.styled';
import { Field } from 'formik';

export const StyledWrapCaloriesCalc = styled.div`
  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: 767px) {
  }
`;

export const StyledHeaderCaloriesCalc = styled(StyledHeaderAuth)`
  width: 280px;
  margin-bottom: 32px;

  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0em;
  text-transform: none;
  /* text-align: left; */
  margin-inline: auto;

  color: ${({ theme }) => theme.colors.firstText};

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 520px;
    margin-bottom: 68px;
    margin-inline: 0;
    font-size: 34px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
  }
`;

export const StyledFormCaloriesCalc = styled(StyledFormAuth)`
  gap: 16px;
  /* align-items: flex-start;
  & #submitButton {
    align-items: center;
  } */

  @media screen and (min-width: ${breakpoints.tablet}) {
    position: relative;
    max-width: 520px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 20px;

    & :nth-child(1) {
      order: 1;
    }

    & :nth-child(2) {
      order: 3;
    }

    & :nth-child(3) {
      order: 5;
    }

    & :nth-child(4) {
      order: 2;
    }

    & :nth-child(5) {
      order: 4;
    }

    & :nth-child(6) {
      order: 6;
    }

    @media screen and (min-width: ${breakpoints.desktop}) {
      max-width: 600px;
    }
  }
`;

export const StyledLabelCaloriesCalc = styled(StyledLabelAuth)``;

export const StyledWrapInputCaloriesCalc = styled(StyledWrapInputAuth)``;

export const StyledInputCaloriesCalc = styled(StyledInputAuth)`
  width: 240px;
  padding: 16px 0px 8px 0px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 20px 0px 20px 0px;
  }
`;

export const StyledErrorCaloriesCalc = styled(StyledErrorAuth)`
  top: 42px;
  font-size: 9px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    top: 60px;
  }
`;

export const BtnWrapCaloriesCalc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    position: absolute;
    top: 125%;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    top: 115%;
    right: 10%;
  }
`;

export const StyledBtnCaloriesCalc = styled(StyledBtnAuthAccent)`
  margin-top: 60px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-top: 0px;
  }
`;

export const StyledLabelBTCaloriesCalc = styled.span`
  &:has(+ #bloodTypeField label input:checked) {
    color: ${({ theme }) => theme.colors.firstText};
  }
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: block;
  width: 240px;
  padding: 16px 0px 0px 0px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.colors.secondText};

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderInput};
  }
`;

export const StyledRadioBtnsBTCaloriesCalc = styled(Field)`
  position: absolute;
  display: flex;
  column-gap: 28px;
  width: 240px;
  margin-top: 8px;

  & :nth-child(1) {
    order: 1;
  }

  & :nth-child(2) {
    order: 2;
  }

  & :nth-child(3) {
    order: 3;
  }

  & :nth-child(4) {
    order: 4;
  }

  & :nth-child(5) {
    order: 5;
  }

  & :nth-child(6) {
    order: 6;
  }
`;

export const StyledRadioLabelBTCaloriesCalc = styled.label`
  display: flex;
  align-items: center;
  column-gap: 4px;

  font-weight: 400;
  line-height: 1.21;

  color: ${({ theme }) => theme.colors.secondText};

  &:hover,
  &:focus {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.inputText};
  }
`;

export const StyledRadioBtnBTCaloriesCalc = styled.input`
  -webkit-appearance: none;
  appearance: none;

  display: grid;
  place-content: center;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  border-radius: 50%;

  background-color: transparent;

  font: inherit;

  cursor: pointer;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: inset 14px 14px ${({ theme }) => theme.colors.button};

    background-color: CanvasText;

    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }

  &:checked::before {
    transform: scale(1);
  }

  &:hover {
    box-shadow: 0 0 20px rgba(252, 132, 45, 0.5);
  }
`;

export const StyledRadioBtnSpanCaloriesCalc = styled.span`
  color: ${props =>
    props.idx === props.children
      ? props.theme.colors.button
      : props.theme.colors.secondText};
  font-weight: ${props => (props.idx === props.children ? '700' : '400')};
`;
