import { ILabelProps } from "./Label.props";
import { LabelEl } from "./Label.styles";

export const Label = ({
  className,
  children,
  text,
  htmlFor,
}: ILabelProps): JSX.Element => {
  return (
    <LabelEl className={className} htmlFor={htmlFor}>
      {children}
      {text}
    </LabelEl>
  );
};
