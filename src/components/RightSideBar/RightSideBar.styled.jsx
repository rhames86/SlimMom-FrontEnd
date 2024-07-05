import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px 12px 20px;
  /* background-color: #f0f1f3; */
  margin-top: 80px;

  @media screen and (max-width: 320px) {
    width: 320px;
    margin-left: -20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    margin-left: -32px;
    flex-direction: row;
    padding: 80px 32px 40px 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 517px;
    /* min-height: 100vh; */
    flex-direction: column;
    margin-top: 0;
    margin-left: 0;
    padding: 0px;
  }
`;

export const BoxList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    &:first-child {
      margin-right: 97px;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 178px;
    &:first-child {
      margin-right: 0px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ListTitle = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.firstText};
  text-align: center;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-position: inside;
  margin: 0;
  padding: 0;
  max-width: 400px;
  max-height: 180px;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }
`;

export const Item = styled.li`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PreContent = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  color: #9b9faa;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.div`
  width: 180px;
  @media screen and (min-width: 768px) {
    width: 182px;
  }
`;

export const Content = styled.div`
  width: 88px;
`;
