import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}


  * {
    box-sizing: border-box;
    font-family: NotoSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
  }

  @font-face {
    font-family: 'NotoSans';
    font-weight: normal;
    src: url('/fonts/NotoSansKR-Regular.woff2') format('woff2');
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
