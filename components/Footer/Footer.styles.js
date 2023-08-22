import styled, { css } from "styled-components";

export const FooterWrapp = styled.footer((props) => {
  const { mediaQueries } = props.theme;

  return css`
    flex-shrink: 0;
    background-color: var(--black);
    padding-top: 20px;
    padding-bottom: 50px;
    color: var(--white);

    padding-left: 6px;
    padding-right: 6px;

    ${mediaQueries.md} {
      padding-left: 0;
      padding-right: 0;
    }

    ul.contactMenu {
      > li {
        padding-left: 0;
        ${mediaQueries.md} {
          padding-left: 50px;
        }
      }
      img {
        left: 0;
      }
    }
    ${mediaQueries.md} {
      padding-top: 35px;
    }

    ${mediaQueries.lg} {
      padding-top: 50px;
    }

    ${mediaQueries.xl} {
      padding-top: 80px;
      padding-bottom: 65px;
    }

    .footer-logo {
      font-size: 36px;
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--white);
      margin-bottom: 20px;

      ${mediaQueries.md} {
        padding-bottom: 20px;
      }
    }

    h4 {
      font-size: 18px;
      font-weight: 600;
      line-height: 26px;
      padding-top: 14px;
      margin-bottom: 20px;
      color: var(--white);
    }

    li {
      margin-bottom: 25px;
      color: var(--white);
      font-size: 16px;
    }

    .socialMenu {
      img {
        margin-right: 25px;
      }
    }
  `;
});

export const SubscribeContainer = styled.div((props) => {
  const { mediaQueries } = props.theme;

  return css`
    border-radius: 10px;
    background-color: var(--cursed-black);
    padding: 0 30px 14px 14px;
    margin-top: 30px;

    ${mediaQueries.md} {
      margin-top: 0;
      padding: 0 14px 20px 14px;
    }
  `;
});
