import styled from "styled-components";

export const Myname = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
  font-family: "Noto Sans KR";
  color: white;
  font-weight: bold;
  font-size:5em;
  .border{
    padding-right:10px;
    border-right:3px solid white;
  }
  .noneBorder{
    padding-right:13px;
    border-right:none;
  }
  @media only screen and (max-width: 970px) {
    width: 100%;
  }
  }
`;
