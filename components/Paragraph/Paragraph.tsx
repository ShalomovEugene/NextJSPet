import { IParagraphProps } from "./Paragraph.props";
import { Paragraph } from "./Paragraph.styles";

export const P = ({ text }: IParagraphProps): JSX.Element => {
  return <Paragraph>{text}</Paragraph>;
};
