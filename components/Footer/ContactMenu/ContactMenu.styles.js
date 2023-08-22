import styled, { css } from "styled-components";

export const ContactMenuWrapp = styled.div((props) => {
  const { mediaQueries } = props.theme;
  return css`
    color: var(--white);
    margin-bottom: 58px;

    ${mediaQueries.md} {
      margin-top: auto;
    }

    h4 {
      font-size: 18px;
      font-weight: 600;
      line-height: 26px;
      margin-bottom: 20px;
    }

    li {
      margin-bottom: 12px;
      color: var(--white);
      font-size: 12px;
      position: relative;
      padding-left: 30px;
      margin-top: 30px;

      ${mediaQueries.md} {
        font-size: 16px;
        margin-bottom: 25px;
        padding-left: 50px;
        margin-top: 0;
      }

      ${mediaQueries.lg} {
        margin-bottom: 35px;
      }
      ${mediaQueries.xl} {
        margin-bottom: 50px;
      }
    }

    .contactMenu {
      img {
        position: absolute;
        left: 50%;
        top: -10px;
        transform: translateY(-100%);

        ${mediaQueries.md} {
          margin-right: 25px;
          transform: none;
          left: 0;
          top: 3px;
        }
      }
    }
  `;
});
