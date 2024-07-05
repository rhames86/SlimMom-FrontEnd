import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
//   padding: 24px 14px;
//   width: 100%;
//   height: 100%;
//   `;

// export const MainBlock = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto;
//   padding: 8px;
//   width: 100%;
// `;

export const CommonContainer = styled.div`
  padding: 20px 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 80px 16px;
  }
`;

export const Wrapper = styled.div`
  padding-top: 81px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    min-height: calc(100vh - 85px);
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 140px;
    display: flex;
  }
`;
