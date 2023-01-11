import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}


  * {
    box-sizing: border-box;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
