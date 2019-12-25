import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import Theme from "../Styles/Theme";
import Header from "./Header/Header";

const BackGroundBody = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-size: cover;
  opacity: 0.5;
  background: #000;
  z-index: -1;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
`;
export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Wrap>
          <BackGroundBody />
          <Header />
          <Routes />
        </Wrap>
      </Router>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </ThemeProvider>
  );
};
