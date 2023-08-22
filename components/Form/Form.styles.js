import styled, { css } from "styled-components";
import ArrowLayout from "../../public/arrow-layout.png";

export const FromWrapp = styled.div((props) => {
  const { mediaQueries } = props.theme;

  return css`
    padding: 30px 20px 60px 20px;
    position: relative;

    ${mediaQueries.md} {
      padding: 60px 50px 100px 30px;
    }

    form {
      position: relative;
    }

    &:before {
      content: "";
      position: absolute;
      width: 158px;
      height: 86px;
      background-size: cover;
      background-image: url(${ArrowLayout.src});
      bottom: 0;
      right: 133px;

      ${mediaQueries.md} {
        width: 208px;
        height: 136px;
      }
    }

    input {
      padding: 5px 0;
      margin-bottom: 20px;
      border-bottom: 1px solid var(--philippine-gray);
      transition: 0.3s;
      color: var(--black);
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;

      ${mediaQueries.md} {
        margin-bottom: 45px;
      }

      &::placeholder {
        color: var(--philippine-gray);
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
    }

    label {
      transition: 0.3s;
    }
  `;
});

export const FieldGroup = styled.div(() => {
  return css`
    position: relative;
    &:hover {
      input {
        border-color: var(--black);
      }
      label {
        color: var(--black);
      }
    }
  `;
});

export const ErrorMessage = styled.span((props) => {
  const { mediaQueries } = props.theme;
  return css`
    color: var(--red-light);
    font-size: 12px;
    position: absolute;
    bottom: 3px;
    left: 0;
    ${mediaQueries.md} {
      bottom: 15px;
    }
  `;
});

export const CheckboxGroup = styled.div((props) => {
  const { mediaQueries } = props.theme;

  return css`
    display: flex;
    margin-bottom: 10px;
    flex-wrap: wrap;

    ${mediaQueries.md} {
      margin-bottom: 45px;
    }

    .checkboxContainer {
      display: block;
      position: relative;
      cursor: pointer;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      padding-left: 20px;
      margin-right: 20px;
      flex: 1 0 auto;
      margin-bottom: 14px;

      &:hover input ~ .checkmark {
        background-color: #ccc;
      }

      input:checked ~ .checkmark {
        background-color: var(--black);
      }

      input:checked ~ .checkmark:after {
        display: block;
      }

      .checkmark:after {
        left: 4px;
        top: 3px;
        width: 3px;
        height: 5px;
        border: solid white;
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
      }
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 3px;
      left: 0;
      height: 13px;
      width: 13px;
      background-color: var(--alto);
      border-radius: 50%;

      &:after {
        content: "";
        position: absolute;
        display: none;
      }
    }
  `;
});

export const MessageGroup = styled.div((props) => {
  const { mediaQueries } = props.theme;

  return css`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    ${mediaQueries.md} {
      margin-bottom: 50px;
    }

    input {
      margin-bottom: 25px;

      ${mediaQueries.md} {
        margin-bottom: 45px;
      }

      &::placeholder {
        color: var(--philippine-gray);
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
    }

    &:hover {
      input {
        border-color: var(--black);
      }
      label {
        color: var(--black);
      }
    }

    button {
      color: var(--white);
      font-size: 16px;
      font-weight: 500;
      border-radius: 5px;
      background: #000;
      box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.12);
      border: none;
      padding: 15px 48px;
      align-self: flex-end;
      cursor: pointer;
    }
  `;
});
