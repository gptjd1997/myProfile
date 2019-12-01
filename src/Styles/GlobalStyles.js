import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Alata&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:500,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700,700i,900&display=swap');
  @import url("https://fonts.googleapis.com/css?family=Nanum+Myeongjo&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Song+Myung&display=swap");
    ${reset}
    *{
        box-sizing:border-box;
    }
    li{
        ist-style:none;
        float:left;
    }
    body{
        
        color:${props => props.theme.blackColor};
        font-size:14px;
        font-family:'Open Sans', 'Roboto', 'Alata',sans-serif;
         background-image:url('./images/dawit-FBmEunYW1Yg-unsplash.jpg');
        background-size:cover;
        background-repeat:no-repeat; 
        background-color:#E0DCBC;
    }
    a{
        text-decoration:none
    }
`;
