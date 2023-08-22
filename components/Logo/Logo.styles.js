import styled, { css } from "styled-components";
import { Inter } from "next/font/google";
const inter = Inter({ weight: "800", subsets: ["latin"] });

export const LogoItem = styled.div(() => {
  return css`
    font-family: ${inter.style.fontFamily};
    font-size: 24px;
    font-weight: 800;

    &.black {
      color: var(--black);
    }

    &.white {
      color: var(--white);
    }
  `;
});
