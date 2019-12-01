import { keyframes } from "styled-components";

export const bar1Style = keyframes`
  100% {
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
            top:50%;
  }
`;
export const bar2Style = keyframes`
  100% {
      opacity:0;
  }
`;
export const bar3Style = keyframes`
  100% {
    -webkit-transform: rotate(-135deg);
            transform: rotate(-135deg);
            top:50%;
  }
`;
