// DiaryCalculator.styles.js
import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';

export const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  font-family: 'Verdana', sans-serif;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 40px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 60px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.firstText};
  font-size: 32px;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 48px;
  }
`;

export const FoodListContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const SummaryContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.backroundSecond};
  padding: 20px;
  border-radius: 10px;

  @media (min-width: ${breakpoints.desktop}) {
    margin-top: 0;
    margin-left: 20px;
  }
`;
