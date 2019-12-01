import styled from "styled-components";
import { bar1Style, bar2Style, bar3Style } from "./Animation";
import { Link } from "react-router-dom";

export const Myname = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
  font-family: "Noto Sans KR";
  color: white;
  font-weight: bold;
  font-size:5em;
  #KeyCursor{
      display: inline;
      font-weight:100;
  }
  @media only screen and (max-width: 970px) {
    width: 100%;
  }
  }
`;

export const Menu = styled.div`
  background-color: rgba(127, 140, 141, 0.1);
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  width: 100px;
  height: 100px;
  overflow: hidden;
  cursor: pointer;
`;
export const Box = styled.div`
  width: 50px;
  height: 50px;
`;

export const Close = styled.div`
  opacity: 0.7;
  background-color: white;
  border: 1px solid white;
  width: 70%;
  height: 2px;
  float: left;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 10px;
  &:first-child {
    top: 40%;
    animation: ${bar1Style} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
      reverse;
  }
  &:nth-child(2) {
    animation: ${bar2Style} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
      reverse;
  }
  &:nth-child(3) {
    top: 60%;
    animation: ${bar3Style} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
      reverse;
  }
`;

export const Open = styled(Close)`
  &:first-child {
    animation: ${bar1Style} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &:nth-child(2) {
    animation: ${bar2Style} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &:nth-child(3) {
    animation: ${bar3Style} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;
