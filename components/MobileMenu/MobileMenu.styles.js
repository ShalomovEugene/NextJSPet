import styled, { css } from "styled-components";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const MobileMenuWrapp = styled.nav((props) => {
  const { mediaQueries } = props.theme;

  return css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--black);
    width: 100%;
    height: 100%;
    z-index: 2;
    padding-top: 30px;

    .closeMobileMenu {
      background-color: transparent;
      border: none;
    }

    .mobileMenu {
      margin-top: 15px;
      flex-direction: column;
      align-items: flex-start;
      display: flex;
      margin-bottom: 60px;

      ${mediaQueries.xl} {
        margin-top: 0;
      }

      li {
        color: var(--white);
        font-family: ${roboto.style.fontFamily};
        font-size: 16px;
        font-weight: 400;
        position: relative;

        .arrow-down {
          transform: rotate(0);
        }
        .arrow-up {
          transform: rotate(180deg);
        }

        a {
          padding: 10px 30px 10px 0;
          display: inline-flex;
          flex-grow: 1;
        }

        &.isActive {
          color: var(--white);
          font-weight: 600;
        }
      }

      .mobileSubMenu {
        margin-left: 15px;
      }
    }

    .secondaryItemMobile {
      border-radius: 50%;
      margin-right: 35px;
      display: flex;
      width: 30px;
      height: 30px;

      &.isActive {
        box-shadow: 0 0 10px 0px var(--white);
        transition: 0.3s;
      }
    }

    .dropdown {
      position: absolute;
      top: 10px;
      right: 0;
      border: none;
      background-color: transparent;
    }
  `;
});
