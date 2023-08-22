import styled, { css } from "styled-components";

export const HeaderWrapp = styled.header((props) => {
  const { mediaQueries } = props.theme;

  return css`
    margin-bottom: 30px;
    margin-top: 30px;
    ${mediaQueries.md} {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    ${mediaQueries.lg} {
      margin-top: 40px;
      margin-bottom: 20px;
    }
    ${mediaQueries.xl} {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  `;
});
