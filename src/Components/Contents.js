import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 100%;
  background-color: ${props => props.theme.WhiteColor};
  width: 70%;
  border-bottom-right-radius: 20px;
`;

export default () => <Wrapper />;
