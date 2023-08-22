import styled, { css } from "styled-components";
import { Roboto } from "next/font/google";
import ArrIcon from "../../public/arrow.svg";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const Ulist = styled.ul((props) => {
  return css`
    li {
      color: var(--white);
      font-size: 16px;
      font-weight: 400;
    }
  `;
});
