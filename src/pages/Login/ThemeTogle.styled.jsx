import styled from 'styled-components';
import { breakpoints } from 'components/styles/breakpoints';
const { tablet } = breakpoints;
// export const TogleSwitch = styled.div`
//   position: relative;
//   width: 200px;
// `;
// export const StyledTogleLable = styled.label`
//   position: absolute;
//   width: 100%;
//   height: 100px;
//   background-color: ${({ theme }) => theme.colors.borderActive};
//   border-radius: 50px;
//   cursor: pointer;
// `;

// export const StyledInput = styled.input`
//   position: absolute;
//   display: none;
//   &:checked ~ span {
//     background-color: ${({ theme }) => theme.colors.button};
//   }
//   &:checked ~ span::before {
//     transform: translateX(95px);
//     background-color: ${({ theme }) => theme.colors.borderActive};
//     box-shadow: none;
//   }
// `;

// export const StyledThemeSpan = styled.span`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   border-radius: 50px;
//   transition: 0.3s;
//   &::before {
//     content: '';
//     position: absolute;
//     top: 13px;
//     left: 16px;
//     width: 75px;
//     height: 75px;
//     border-radius: 50%;
//     box-shadow: inset 28px -4px 0px 0px ${({ theme }) => theme.colors.button};
//     background-color: ${({ theme }) => theme.colors.borderActive};
//     transition: 0.3s;
//   }
// `;

export const TogleSwitch = styled.div`
  margin: 0 auto;
  position: relative;
  width: 40px;
  height: 20px;
  margin-bottom: 5px;
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0px;
    /* margin-right: 45px; */
  }
`;
export const StyledTogleLable = styled.label`
  position: absolute;
  width: 100%;
  height: 20.5px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.backroundSecond};
  border-radius: 50px;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  position: absolute;
  display: none;
  &:checked ~ span {
    background-color: ${({ theme }) => theme.colors.button};
  }
  &:checked ~ span::before {
    transform: translateX(16px);
    box-shadow: none;

    background-color: ${({ theme }) => theme.colors.backroundSecond};
    transform: translateX(18px);
  }
`;

export const StyledThemeSpan = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: 0.3s;
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 3px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: inset 6px -1px 0px 0px ${({ theme }) => theme.colors.button};
    background-color: ${({ theme }) => theme.colors.backroundSecond};

    transition: 0.3s;
  }
`;
