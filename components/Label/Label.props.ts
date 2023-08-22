import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ILabelProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children?: ReactNode;
  className?: string;
  text?: string;
  htmlFor?: string;
}
