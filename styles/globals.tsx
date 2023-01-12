import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  a:link { color: red; text-decoration: none;}
  a:visited { color: white; text-decoration: none;}

  * {
    box-sizing: border-box;
    font-family: NotoSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  a { 
    font-family: NotoSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  @font-face {
    font-family: 'NotoSans';
    font-weight: normal;
    src: url('/fonts/NotoSansKR-Regular.woff2') format('woff2');
  }

  button{
    cursor: pointer;
  }
  
  p {
    font-size: 35px;
    margin-bottom: 20px;
  }
`;

export default GlobalStyle;
