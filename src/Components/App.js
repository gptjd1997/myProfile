import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Profile";
import Routes from "./Routes";
import Header from "./Header";
import Theme from "../Styles/Theme";

// const Wrapper = styled.div`
//   max-width: 40%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   height: 80%;
//   width: 100%;
//   background-color: ${props => props.theme.WhiteColor};
//   position: relative;
//   margin: 50px;
// `;

const BackGroundBody = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-size: cover;
  opacity: 0.5;
  background: #000;
`;

const ImgWrapper = styled.div`
  max-width: 40%;
  height: 80%;
  width: 100%;
  display: flex;
  margin: 50px;
  justify-content: center;
  opacity: 0.9;
`;
const ContentWrapper = styled.div``;
export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <BackGroundBody />
        <ImgWrapper></ImgWrapper>
        <ContentWrapper>Hello I'm JeonHyeSeong</ContentWrapper>
      </Router>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </ThemeProvider>
  );
};
