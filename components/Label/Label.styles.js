import styled, { css } from "styled-components";

export const LabelEl = styled.label((props) => {
  return css`
    color: var(--philippine-gray);
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 5px;
  `;
});
