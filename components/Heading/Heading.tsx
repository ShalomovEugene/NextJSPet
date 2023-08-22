"use client";
import { IHeadingProps } from "./Heading.props";
import { H1, H2, H3, H4, H5, H6 } from "./Heading.styles";

export const Heading = ({ tag, text }: IHeadingProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <H1>{text}</H1>;
    case "h2":
      return <H2>{text}</H2>;
    case "h3":
      return <H3>{text}</H3>;
    case "h4":
      return <H4>{text}</H4>;
    case "h5":
      return <H5>{text}</H5>;
    case "h6":
      return <H6>{text}</H6>;
    default:
      return <H1>{text}</H1>;
  }
};
