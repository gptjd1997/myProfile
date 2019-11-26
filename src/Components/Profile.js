import React from "react";
import styled from "styled-components";

const Profile = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${props => props.theme.PinkColor};
  border-bottom-left-radius: 20px;
  padding: 20px;
`;
const HeadLine = styled.dt`
  font-size: 20px;
  font-weight: 800;
  padding: 10px 0;
`;
const ContentLine = styled.dd`
  padding-left: 10px;
`;
export default () => {
  return (
    <Profile>
      <HeadLine>이름</HeadLine>
      <ContentLine>전혜성</ContentLine>
      <HeadLine>나이</HeadLine>
      <ContentLine>23</ContentLine>
      <HeadLine>이름</HeadLine>
      <ContentLine>전혜성</ContentLine>
      <HeadLine>이름</HeadLine>
      <ContentLine>전혜성</ContentLine>
    </Profile>
  );
};
