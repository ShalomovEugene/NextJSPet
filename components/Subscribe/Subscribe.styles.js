import styled, { css } from "styled-components";
import { Manrope } from "next/font/google";
const manrope = Manrope({ weight: ["500"], subsets: ["latin"] });

export const SubscribeFormWrapp = styled.div(() => {
  return css`
    position: relative;

    p {
      font-family: ${manrope.style.fontFamily};
      font-size: 13px;
      font-weight: 500;
    }
    input {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: var(--cod-gray);
      color: var(--dove-gray);
      font-size: 11px;
      font-weight: 400;
      padding: 12px 10px;
      flex-grow: 1;

      &::placeholder {
        color: var(--dove-gray);
        font-size: 11px;
        font-weight: 400;
      }
    }
    button {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border: none;
      background-color: var(--black);
      color: var(--white);
      font-size: 12px;
      font-weight: 400;
      padding: 12px 22px;
    }
  `;
});

export const SubscribeGroup = styled.div(() => {
  return css`
    display: flex;
    margin-bottom: 20px;
    position: relative;
  `;
});

export const ErrorMessage = styled.div(() => {
  return css`
    color: var(--red-light);
    font-size: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(18px);
}
  `;
});
