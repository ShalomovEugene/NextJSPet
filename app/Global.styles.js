import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    overflow-x: hidden;
    max-width: 100vw;
    color: var(--black);
    background-color: #E5E5E5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  :root {
    --black: #3B434E;
    --gray-light: #EBEBEB;
    --white: white;
    --primary: #7351F5;
    --primary-hover: #6644EF;
    --red: #FC836D;
    --red-light: #F99988;
    --green: #007B4B;
    --green-light: #C8F8E4;
    --gray: #A4A4A4;
    --gray-dark: #6C7077;
  }
`;

export default GlobalStyle;
