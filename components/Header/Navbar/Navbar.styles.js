import styled, { css } from "styled-components";
import { Roboto } from "next/font/google";
import ArrIcon from "../../../public/arrow.svg";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const NavbarWrapp = styled.nav((props) => {
  const { mediaQueries } = props.theme;

  return css`
    .menu {
      margin-top: 15px;
      ${mediaQueries.xl} {
        margin-top: 0;
      }

      > li {
        margin-right: 20px;
        position: relative;
      }

      li {
        color: var(--eerie-black);
        font-family: ${roboto.style.fontFamily};
        font-size: 16px;
        font-weight: 400;
        display: flex;
        a {
          padding: 10px 22px;
          display: inline-flex;
          flex-grow: 1;

          ${mediaQueries.lg} {
            padding: 10px 27px;
          }
        }

        &.isActive,
        &:hover {
          color: var(--black);
          font-weight: 600;
        }
        &:hover {
          > .subMenu {
            display: block;
          }
        }
      }
    }

    .burgerButton {
      background-color: transparent;
      border: none;
    }
    .arr-icon {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        background-image: url(${ArrIcon.src});
        width: 12px;
        height: 7px;
        right: 5px;
        top: 16px;
        transition: 0.3s;
      }
    }

    .arr-icon:hover {
      &:after {
        transform: rotate(180deg);
      }
    }

    .subMenu {
      display: none;
      position: absolute;
      background-color: var(--lotion);
      bottom: 0;
      left: 0;
      transform: translatey(100%);
    }

    .secondaryItem {
      border-radius: 50%;
      border: 1px solid var(--black);
      margin-right: 35px;
      padding: 5px;
      width: 30px;
      height: 30px;
      align-items: center;
      justify-content: center;

      &.isActive,
      &:hover {
        box-shadow: 0 1px 4px 0px var(--black);
        transition: 0.3s;
      }
    }
  `;
});
