import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';
import { breakpoints } from 'components/styles/breakpoints';

export const Form = styled.form`
  display: flex;
  align-items: flex-end;

  position: relative;
  @media (min-width: ${breakpoints.mobile}) {
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 505px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: row;
    padding-top: 0;
  
  }
`;

export const InputProdName = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid #e0e0e0;

  padding-bottom: 20px;
  height: 38px;

  font-family: 'Verdana';
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.firstText};
  background: transparent;

  ::placeholder {
    color: ${({ theme }) => theme.colors.firstText};
  }

  @media (min-width: ${breakpoints.mobile}) {
    width: 280px;

    margin-bottom: 32px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 240px;
    margin-right: 28px;
    font-weight: 700;
    margin-bottom: 0;
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin-right: 48px;
  }
`;

export const InputGrams = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid #e0e0e0;

  padding-bottom: 20px;
  height: 38px;

  font-family: 'Verdana';
  font-weight: 700;
  line-height: 120%;
  text-align: right;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.firstText};
  background: transparent;

  ::placeholder {
    color: ${({ theme }) => theme.colors.firstText};
  }

  @media (min-width: ${breakpoints.mobile}) {
    width: 280px;

    text-align: left;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 107px;
    margin-right: 87px;
    font-weight: 700;
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin-right: 60px;
  }
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  color: #fff;
  border: 0;
  border-radius: 50%;

  &:hover {
    box-shadow: 0 0 20px rgb(247, 95, 42);
    background: rgb(247, 95, 42);
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: block;
    margin: 60px auto 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;

export const ButtonMob = styled.button`
  width: 176px;
  height: 44px;
  border: 0;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  color: #fff;
  font-weight: 700;
  margin-top: 60px;
  &:hover {
    box-shadow: 0 0 20px rgb(247, 95, 42);
    background: rgb(247, 95, 42);
  }
`;

export const Plus = styled(BiPlus)`
  width: 25px;
  height: auto;
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 4px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  color: #000;
  position: absolute;
  width: auto;
  min-width: 100%;
  max-width: 240px;
  z-index: 10;

  @media (min-width: ${breakpoints.mobile}) {
    top: 30%;
  }
  @media (min-width: ${breakpoints.tablet}) {
    top: 100%;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }
`;

export const SuggestionItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
