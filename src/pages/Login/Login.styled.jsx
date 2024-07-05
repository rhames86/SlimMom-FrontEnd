import { Field, Form } from 'formik';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from 'components/styles/breakpoints';

export const StyledInputAuth = styled(Field)`
  border: none;
  width: 280px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderInput};
  padding: 20px 0px;
  background-color: transparent;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: ${({ theme }) => theme.colors.inputText};
  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderActive};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  &:not(:placeholder-shown) + span,
  &:focus + span {
    top: 0;
    /* transform: translateY(-20px); */
    color: ${({ theme }) => theme.colors.borderActive};
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 240px;
  }
`;

export const StyledFormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    align-items: start;
  }
`;

export const StyledBtnAuthAccent = styled.button`
  width: 182px;
  height: 44px;
  border: none;
  font-family: inherit;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.buttonText};
  background: ${({ theme }) => theme.colors.button};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;
export const StyledLinkAuth = styled(Link)`
  width: 182px;
  height: 44px;
  border: none;
  font-family: inherit;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.button};
  background: ${({ theme }) => theme.colors.buttonText};
  border: 2px solid ${({ theme }) => theme.colors.button};
  /* box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5); */
  border-radius: 30px;
  transition: background-color 250ms linear, color 250ms linear;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.shadowButtonHover};
    color: ${({ theme }) => theme.colors.buttonText};
  }
`;
export const StyledWrapAuthBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
  }
`;
export const StyledWrapInputAuth = styled.div`
  position: relative;
`;
export const StyledLabelAuth = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.secondText};
  pointer-events: none;
  transition: all 250ms linear;
`;
export const StyledHeaderAuth = styled.h3`
  font-weight: 700;
  margin-bottom: 40px;
  font-size: 14px;
  text-align: center;
  line-height: 1.21;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.button};
  @media screen and (min-width: ${breakpoints.tablet}) {
    text-align: left;
  }
`;

export const StyledErrorAuth = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.button};
`;

export const AuthWrapComponent = styled.div`
  /* padding-top: 40px; */
  /* @media screen and (min-width: ${breakpoints.tablet}) {
    padding-top: 150px;
  } */
`;
