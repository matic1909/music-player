import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
  }

  h1, h2, h3 {
    color: rgb(54, 54, 54);
  }

  h3, h4 {
    font-weight: 400;
    color: rgb(100,100,100);
  }
`;

export default GlobalStyle;
