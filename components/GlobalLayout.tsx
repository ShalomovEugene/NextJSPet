"use client";
import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer/Footer";
import { IGlobalLayoutProps } from "./GlobalLayout.props";
import { GlobalStyle, Wrapper, Main } from "./GlobalLayout.styles.js";
import StyledComponentsRegistry from "../lib/registry";
import { theme } from "@/theme";
import { ThemeProvider } from "styled-components";

const GlobalLayout: FC<IGlobalLayoutProps> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <div className="container flex-grow-1">
            <div className="row">
              <Header />
              <Main>{children}</Main>
            </div>
          </div>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default GlobalLayout;
