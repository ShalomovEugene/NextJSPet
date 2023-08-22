import styled, { css } from "styled-components";
import Circles from "../../public/circles-layout.png";

export const ContactInformationWrapp = styled.div((props) => {
  const { mediaQueries } = props.theme;

  return css`
    padding: 5px 0;
    display: flex;
    flex-grow: 1;

    ${mediaQueries.md} {
      padding: 10px 0;
    }

    h3 {
      color: var(--white);
    }
  `;
});

export const HeaderSection = styled.header((props) => {
  const { mediaQueries } = props.theme;
  return css`
    position: relative;
    text-align: center;

    ${mediaQueries.md} {
      text-align: left;
    }
  `;
});

export const ContactInformationSection = styled.div((props) => {
  const { mediaQueries } = props.theme;
  return css`
    border-radius: 10px;
    background-color: var(--black);
    padding: 15px 15px 25px 15px;
    display: flex;
    flex-direction: column;
    position: relative;
    flex-grow: 1;

    ${mediaQueries.md} {
      padding: 40px 100px 35px 40px;
    }

    &:before {
      content: "";
      position: absolute;
      width: 108px;
      height: 109px;
      background-size: cover;
      background-image: url(${Circles.src});
      bottom: 0;
      right: 0;
      ${mediaQueries.md} {
        width: 208px;
        height: 209px;
      }
    }

    p {
      color: var(--chinese-silver);
      font-size: 11px;
      font-weight: 400;
      margin-bottom: 12px;

      ${mediaQueries.md} {
        font-size: 18px;
      }
    }
  `;
});
