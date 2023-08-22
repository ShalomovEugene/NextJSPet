import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IUlProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  children?: ReactNode;
  className?: string;
}
