import { ILogoProps } from "./Logo.props";
import { LogoItem } from "./Logo.styles";

export const Logo = ({
  text,
  color = "black",
  extraClass,
}: ILogoProps): JSX.Element => {
  return <LogoItem className={`${color} ${extraClass}`}>{text}</LogoItem>;
};
