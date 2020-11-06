import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3 {
    color: rgb(54, 54, 54);
  }
`;

export default GlobalStyle;
