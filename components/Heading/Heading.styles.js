import styled, { css } from "styled-components";

export const H1 = styled.h1(() => {
  return css`
    font-size: 55px;
  `;
});

export const H2 = styled.h2(() => {
  return css`
    font-size: 40px;
    text-align: center;
  `;
});

export const H3 = styled.h3((props) => {
  const { mediaQueries } = props.theme;
  return css`
    font-size: 20px;
    margin-bottom: 6px;

    ${mediaQueries.lg} {
      font-size: 28px;
    }
  `;
});

export const H4 = styled.h4(() => {
  return css`
    font-size: 24px;
  `;
});

export const H5 = styled.h5(() => {
  return css`
    font-size: 20px;
  `;
});

export const H6 = styled.h6(() => {
  return css`
    font-size: 14px;
    line-height: 20px;
  `;
});
