import styled, { css } from "styled-components";

export const WrapperContact = styled.div((props) => {
  const { mediaQueries } = props.theme;
  return css`
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
      ${mediaQueries.md} {
        font-size: 35px;
      }
    }
    > p {
      text-align: center;
      margin-bottom: 20px;
      font-size: 14px;

      ${mediaQueries.md} {
        font-size: 18px;
      }

      ${mediaQueries.xl} {
        margin-bottom: 50px;
      }
    }

    .contactMenu {
      align-items: center;
      ${mediaQueries.md} {
        align-items: flex-start;
      }
    }
  `;
});

export const WrapperContactInfo = styled.div(() => {
  return css`
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.03);
  `;
});
