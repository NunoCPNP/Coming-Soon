import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyles = createGlobalStyle`
  ${normalize()};

  @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");

  html {
    box-sizing: border-box;
  }

  *, *:before, *: after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
    overflow-y: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;

