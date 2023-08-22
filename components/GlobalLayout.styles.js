import styled, { css } from "styled-components";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
    background-color: var(--lotion);
    font-family: ${poppins.style.fontFamily};
  }

  .mobileMenuOpened {
    height: 100vh;
    overflow-y: hidden;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${poppins.style.fontFamily};
    color: var(--black);
    margin-bottom: 10px;
    font-weight: 600;
  }

  a { 
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  p {
    color: var(--dark-silver);
    font-family: ${poppins.style.fontFamily};
    font-size: 18px;
    font-weight: 500;
  }
  input {
      border: none;
      &:focus {
        outline: none;
      }
  }
  

  :root {
    --black: #000;
    --eerie-black: #1F1F1F;
    --white: #fff;
    --dark-silver: #717171;
    --lotion: #FBFBFB;
    --chinese-silver: #C9C9C9;
    --philippine-gray: #8d8d8d;
    --red-light: #ef6850;
    --alto: #E0E0E0;
    --cod-gray: #1E1E1E;
    --dove-gray: #616161;
    --cursed-black: #131313;
  }
`;

export const Wrapper = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;
});

export const Main = styled.main((props) => {
  const { mediaQueries } = props.theme;
  return css`
    margin-top: 10px;
    margin-bottom: 50px;

    ${mediaQueries.lg} {
      margin-top: 20px;
    }
    ${mediaQueries.xl} {
      margin-top: 40px;
    }
  `;
});
