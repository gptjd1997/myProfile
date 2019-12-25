import styled from "styled-components";

export const Header = styled.div`
  width: 50%;
  height: 50px;
  position: fixed;
  top: 0;
`;
export const HeaderUl = styled.ul`
  display: flex;
  justify-content: center;
`;
export const HeaderLi = styled.li`
  display: flex;
  justify-content: center;
  a {
    color: white;
    outline: none;
    font-weight: bold;
    &:hover {
      opacity: 0.7;
    }
    padding: 20px 40px;
    display: block;
  }
`;
