import { IUlProps } from "./Ul.props";
import { Ulist } from "./Ul.styles";
import Image from "next/image";

export const Ul = ({ className, children }: IUlProps): JSX.Element => {
  return <Ulist className={className}>{children}</Ulist>;
};
