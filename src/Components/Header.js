import React from "react";
import styled from "styled-components";
export const Header = styled.div`
  border-radius:20px 20px 0 0;
  background-color:${props => props.theme.BlueColor}
  width: 100%;
  height: 180px;
  position: relative;
`;
export const HeaderLogo = styled.div`
  height: 100%;
  display: flex;
  padding-left: 30px;
  align-items: center;
  justify-content: center;
`;

export default () => {
  return (
    <Header>
      <HeaderLogo>
        <img src="./images/전혜성.png" alt="전혜성입니다" />
      </HeaderLogo>
    </Header>
  );
};
