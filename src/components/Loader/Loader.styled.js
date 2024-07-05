import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LoaderStyle = {
  LoaderContainer,
};
